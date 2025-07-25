import { render, screen } from '@testing-library/react';
import { Projects } from '.';
import type { ImgHTMLAttributes } from 'react';
import userEvent from '@testing-library/user-event';

jest.mock(
	'next/image',
	() =>
		({ fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
			<img {...props} alt='preview project' />
		),
);

describe('Projects', () => {
	const url = new URL('http://localhost:3333/');

	beforeEach(() => {
		window.history.pushState({}, '', url);
	});

	it('should render correctly', async () => {
		render(<Projects />);
		await screen.findByRole('heading', { level: 1, name: /test 1/i });
		screen.getByRole('heading', { level: 1, name: /test 2/i });
		const slidesContainer = screen.getByRole('list');
		expect(slidesContainer).toHaveClass('glide__slides');
		const slidesContainerTrack = slidesContainer.parentNode;
		expect(slidesContainerTrack).toHaveClass('glide__track');
		expect(slidesContainerTrack).toHaveAttribute('data-glide-el', 'track');
		expect(slidesContainerTrack?.parentNode).toHaveClass('glide');
	});

	it('should restore old slide when access url with query param index', async () => {
		url.searchParams.set('index', '1');
		window.history.pushState({}, '', url);
		render(<Projects />);
		await screen.findByText(/2 de 2/i);
		const projectSlides = await screen.findAllByRole('listitem');
		expect(projectSlides[1]).toHaveAttribute('data-visible', 'true');
	});

	it('should go to next slide when clicked at the arrow right', async () => {
		const user = userEvent.setup();
		render(<Projects />);
		const buttonNext = await screen.findByRole('button', { name: /next/i });

		await user.click(buttonNext);

		await screen.findByText(/2 de 2/);
		const projectSlides = await screen.findAllByRole('listitem');
		expect(projectSlides[0]).not.toHaveAttribute('data-visible', 'true');
		expect(projectSlides[1]).toHaveAttribute('data-visible', 'true');
	});

	it('should go to back slide when clicked at the arrow left', async () => {
		url.searchParams.set('index', '1');
		window.history.pushState({}, '', url);
		const user = userEvent.setup();
		render(<Projects />);
		const buttonPrevious = await screen.findByRole('button', {
			name: /previous/i,
		});

		await screen.findByText(/2 de 2/i);
		await user.click(buttonPrevious);

		await screen.findByText(/1 de 2/i);
		const projectSlides = await screen.findAllByRole('listitem');
		expect(projectSlides[1]).not.toHaveAttribute('data-visible', 'true');
		expect(projectSlides[0]).toHaveAttribute('data-visible', 'true');
	});
});
