import { render, screen } from '@testing-library/react';
import { ProjectLinkRoot, ProjectLinkContent } from './project-link';

describe('ProjectLink', () => {
	it('should render correctly', () => {
		render(
			<ProjectLinkRoot href='https://www.google.com'>
				<ProjectLinkContent>Google</ProjectLinkContent>
			</ProjectLinkRoot>,
		);
		screen.getByRole('link');
		screen.getByRole('button', { name: /google/i });
	});

	it('should render link with correct props', () => {
		render(
			<ProjectLinkRoot href='https://www.google.com'>
				<ProjectLinkContent>Google</ProjectLinkContent>
			</ProjectLinkRoot>,
		);

		const linkElement = screen.getByRole('link');
		expect(linkElement).toHaveAttribute('href', 'https://www.google.com');
		expect(linkElement).toHaveAttribute('target', '_blank');
	});
});
