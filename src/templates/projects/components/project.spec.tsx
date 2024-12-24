'use client';

import { render } from '@testing-library/react';
import { Project } from './project';

const mockUseVisibleSlide = jest.fn();

jest.mock('@/components/title', () => ({
	Title: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
}));

jest.mock('./link', () => ({
	ProjectLink: ({ children, ...props }: { children: React.ReactNode }) => (
		<a {...props}>{children}</a>
	),
}));

jest.mock('./preview', () => ({
	ProjectPreview: ({ ...props }) => (
		<div {...props} data-testid='ProjectPreview' />
	),
}));

jest.mock('../hooks/use-visible-slide', () => ({
	useVisibleSlide: ({ ...props }) => mockUseVisibleSlide(props),
}));

describe('<Project />', () => {
	const datas = {
		_id: '67090837-4294-4873-9555-20b070a0565f',
		name: 'Project name',
		slug: 'project-slug',
		tools: ['tool1', 'tool2'],
		images_url: {
			png: 'https://example.com/image.png',
			gif: 'https://example.com/image.gif',
		},
		links: {
			deploy: 'https://example.com/',
			repository: 'https://example.com',
		},
		description: 'Project description',
	};

	it('should render project container with correct data-slug', () => {
		const { getByRole } = render(<Project project={datas} index={0} />);

		const projectElement = getByRole('listitem');
		expect(projectElement).toHaveAttribute('data-slug', 'project-slug');
	});

	it('should render project container with slide config class', () => {
		const { getByRole } = render(<Project project={datas} index={0} />);

		const projectElement = getByRole('listitem');
		expect(projectElement).toHaveClass('glide__slide');
	});

	it('should render project container with correct title', () => {
		const { getByRole } = render(<Project project={datas} index={0} />);

		const projectElement = getByRole('heading', { level: 1 });
		expect(projectElement).toHaveTextContent('Project name');
	});

	it('should render project description with correct props', () => {
		const { getByText, getByRole } = render(
			<Project project={datas} index={0} />,
		);

		const descriptionElement = getByText('Project description');
		expect(descriptionElement).toBeVisible();

		const descriptionLabelElement = getByRole('heading', {
			level: 3,
			name: 'Descrição',
		});
		expect(descriptionLabelElement).toBeVisible();
	});

	it('should render project tools list with correct props', () => {
		const { getByText, getByRole } = render(
			<Project project={datas} index={0} />,
		);

		const toolsLabelElement = getByRole('heading', {
			level: 3,
			name: 'Ferramentas',
		});
		expect(toolsLabelElement).toBeVisible();

		const tool1Element = getByText('tool1');
		expect(tool1Element).toBeVisible();

		const tool2Element = getByText('tool2');
		expect(tool2Element).toBeVisible();
	});

	it('should render project links with correct props', () => {
		const { getByRole } = render(<Project project={datas} index={0} />);

		const linksLabelElement = getByRole('heading', {
			level: 3,
			name: 'Links',
		});
		expect(linksLabelElement).toBeVisible();

		const deployLinkElement = getByRole('link', { name: 'Site' });
		expect(deployLinkElement).toHaveAttribute('href', 'https://example.com/');

		const repositoryLinkElement = getByRole('link', { name: 'Repositório' });
		expect(repositoryLinkElement).toHaveAttribute(
			'href',
			'https://example.com',
		);
	});

	it('should render preview and receive correct props', () => {
		const { getByTestId } = render(<Project project={datas} index={0} />);

		const projectPreviewElement = getByTestId('ProjectPreview');
		expect(projectPreviewElement).toBeVisible();
		expect(projectPreviewElement).toHaveAttribute(
			'png',
			'https://example.com/image.png',
		);
		expect(projectPreviewElement).toHaveAttribute(
			'gif',
			'https://example.com/image.gif',
		);
	});

	it('should call useVisibleSlide hook with correct params', () => {
		render(<Project project={datas} index={0} />);

		expect(mockUseVisibleSlide).toHaveBeenCalledTimes(1);
		expect(mockUseVisibleSlide).toHaveBeenCalledWith({
			index: 0,
			slug: 'project-slug',
		});
	});
});
