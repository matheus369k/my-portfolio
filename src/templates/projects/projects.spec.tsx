'use client';

import { render } from '@testing-library/react';
import { Projects } from './projects';

jest.mock('./components/control-slides', () => ({
	ControlSlideProject: ({ ...props }) => (
		<div {...props} data-testid='ProjectSlideControl' />
	),
}));

jest.mock('./components/project', () => ({
	Project: ({ ...props }) => <div {...props} data-testid='ProjectSlideItem' />,
}));

jest.mock('react', () => ({
	...jest.requireActual('react'),
	Suspense: ({ children }: { children: React.ReactNode }) => (
		<div data-testid='Suspense'>{children}</div>
	),
}));

jest.mock('@/contexts/slide-projects', () => ({
	SlideProjectsContextProvider: ({
		children,
	}: { children: React.ReactNode }) => (
		<div data-testid='ProjectSlideContext'>{children}</div>
	),
}));

const data = [
	{
		_id: '774f310b-147d-4636-828b-37d6c625a289',
		name: 'Project 1',
		slug: 'project-1',
		tools: ['tool1', 'tool2'],
		images_url: {
			png: 'https://example.com/image.png',
			gif: 'https://example.com/image.gif',
		},
		links: {
			deploy: 'https://example.com/deploy',
			repository: 'https://example.com/repository',
		},
		description: 'project 1 description',
	},
];

describe('<Projects />', () => {
	it('should render project components with all config from slide lib', () => {
		const { getByTestId, getByRole } = render(<Projects projects={data} />);

		const projectsRootElement = getByTestId('ProjectsRoot');
		expect(projectsRootElement).toHaveClass('glide');

		const projectsContainerElement = getByTestId('ProjectsContainer');
		expect(projectsContainerElement).toHaveClass('glide__track');
		expect(projectsContainerElement).toHaveAttribute('data-glide-el', 'track');

		const projectsListElement = getByRole('list');
		expect(projectsListElement).toHaveClass('glide__slides');
	});

	it('should render suspense', () => {
		const { getByTestId, getByRole } = render(<Projects projects={data} />);

		const suspenseElement = getByTestId('Suspense');
		expect(suspenseElement).toBeInTheDocument();
	});

	it('should render slide context', () => {
		const { getByTestId } = render(<Projects projects={data} />);

		const slideContextElement = getByTestId('ProjectSlideContext');
		expect(slideContextElement).toBeInTheDocument();
	});

	it('should render project components', () => {
		const { getAllByTestId } = render(<Projects projects={data} />);

		const projectComponents = getAllByTestId('ProjectSlideItem');
		expect(projectComponents).toHaveLength(1);
	});

	it('should render control slide', () => {
		const { getByTestId } = render(<Projects projects={data} />);

		const controlSlideElement = getByTestId('ProjectSlideControl');
		expect(controlSlideElement).toBeInTheDocument();
	});

	it('should control with correct prosps', () => {
		const { getByTestId } = render(<Projects projects={data} />);

		const controlSlideElement = getByTestId('ProjectSlideControl');
		expect(controlSlideElement).toHaveAttribute('total', '1');
	});

	it('should render project components with correct props', () => {
		const { getAllByTestId } = render(<Projects projects={data} />);

		const projectComponents = getAllByTestId('ProjectSlideItem');
		expect(projectComponents[0]).toHaveAttribute('index', '0');
		expect(projectComponents[0]).toHaveAttribute('project', String(data[0]));
	});
});
