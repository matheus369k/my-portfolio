import { render, screen } from '@testing-library/react';
import { ProjectItem } from './project-item';
import type { ImgHTMLAttributes, ReactNode } from 'react';
import { SlideProjectsContextProvider } from '@/contexts/slide-projects';

jest.mock(
	'next/image',
	() =>
		({ fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
			<img {...props} alt='preview project' />
		),
);

const wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<SlideProjectsContextProvider>{children}</SlideProjectsContextProvider>
	);
};

describe('ProjectItem', () => {
	const defaultProps = {
		_id: '1',
		name: 'Test 1',
		slug: 'test-1',
		tools: ['skill-test-1', 'skill-test-2'],
		image_url: 'http://localhost:3000/test.png',
		links: {
			deploy: 'http://localhost:3000/test/deploy',
			repository: 'http://localhost:3000/test/repos',
		},
		description: 'This description from test site',
	};

	it('should render correctly', () => {
		render(<ProjectItem index={0} project={defaultProps} />, { wrapper });
		screen.getByRole('heading', { level: 1, name: /test 1/i });
		screen.getByRole('heading', { level: 3, name: /Descrição/i });
		screen.getByText(/This description from test site/i);
		screen.getByRole('heading', { level: 3, name: /Ferramentas/i });
		screen.getByText(/skill-test-1/i);
		screen.getByText(/skill-test-2/i);
		screen.getByRole('button', { name: /site/i });
		screen.getByRole('button', { name: /repositório/i });
		screen.getByRole('img', { name: /preview project/i });
	});

	it('should render project preview with correct image_url', () => {
		render(<ProjectItem index={0} project={defaultProps} />, { wrapper });
		const previewImage = screen.getByRole('img', { name: /preview project/i });
		expect(previewImage).toHaveAttribute('src', defaultProps.image_url);
	});

	it('should render project links with correct url', () => {
		render(<ProjectItem index={0} project={defaultProps} />, { wrapper });
		const links = screen.getAllByRole('link');
		expect(links[0]).toHaveAttribute('href', defaultProps.links.deploy);
		expect(links[1]).toHaveAttribute('href', defaultProps.links.repository);
	});
});
