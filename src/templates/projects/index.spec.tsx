import {
	cleanup,
	findByRole,
	render,
	screen,
	waitFor,
} from '@testing-library/react';
import { Projects } from '.';
import { act, type ImgHTMLAttributes } from 'react';
import userEvent from '@testing-library/user-event';
import { before } from 'node:test';
import { slideProjectsContext } from '@/contexts/slide-projects';

jest.mock(
	'next/image',
	() =>
		({ fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
			<img {...props} alt='preview project' />
		),
);

describe('Projects', () => {
	const defaultProps = [
		{
			_id: '1',
			name: 'Test 1',
			slug: 'test-1',
			tools: ['skill-test-1', 'skill-test-2'],
			image_url: 'http://localhost:3000/test-1.png',
			links: {
				deploy: 'http://localhost:3000/test/deploy',
				repository: 'http://localhost:3000/test/repos',
			},
			description: 'This description from test site',
		},
		{
			_id: '2',
			name: 'Test 2',
			slug: 'test-2',
			tools: ['skill-test-1', 'skill-test-2'],
			image_url: 'http://localhost:3000/test-2.png',
			links: {
				deploy: 'http://localhost:3000/test/deploy',
				repository: 'http://localhost:3000/test/repos',
			},
			description: 'This description from test site',
		},
	];

	beforeEach(() => {
		const url = new URL('http://localhost:3333/');
		window.history.pushState({}, '', url);
	});

	it('should render correctly', async () => {
		render(<Projects projects={defaultProps} />);
		await screen.findByRole('heading', { level: 1, name: /test 1/i });
		screen.getByRole('heading', { level: 1, name: /test 2/i });
		const slidesContainer = screen.getByRole('list');
		expect(slidesContainer).toHaveClass('glide__slides');
		const slidesContainerTrack = slidesContainer.parentNode;
		expect(slidesContainerTrack).toHaveClass('glide__track');
		expect(slidesContainerTrack).toHaveAttribute('data-glide-el', 'track');
		expect(slidesContainerTrack?.parentNode).toHaveClass('glide');
	});

	it('should go to next slide when clicked at the arrow right', async () => {
		const user = userEvent.setup();
		render(<Projects projects={defaultProps} />);
		const buttonNext = await screen.findByRole('button', { name: /next/i });

		await user.click(buttonNext);

		await waitFor(
			() => {
				const projectSlides = screen.getAllByRole('listitem');
				expect(projectSlides[0]).not.toHaveAttribute('data-visible', 'true');
				expect(projectSlides[1]).toHaveAttribute('data-visible', 'true');
				screen.getByText(/2 de 2/);
			},
			{ timeout: 1000 },
		);
	});

	it('should go to back slide when clicked at the arrow left', async () => {
		const user = userEvent.setup();
		render(<Projects projects={defaultProps} />);
		const buttonNext = await screen.findByRole('button', { name: /next/i });
		const buttonPrevious = screen.getByRole('button', {
			name: /previous/i,
		});

		await user.click(buttonNext);
		await waitFor(() => screen.getByText(/2 de 2/i), { timeout: 1000 });
		await user.click(buttonPrevious);

		await waitFor(
			() => {
				const projectSlides = screen.getAllByRole('listitem');
				expect(projectSlides[1]).not.toHaveAttribute('data-visible', 'true');
				expect(projectSlides[0]).toHaveAttribute('data-visible', 'true');
				screen.getByText(/1 de 2/i);
			},
			{ timeout: 1000 },
		);
	});
});
