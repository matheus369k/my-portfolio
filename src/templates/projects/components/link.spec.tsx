import { render } from '@testing-library/react';
import { ProjectLink } from './link';

describe('<ProjectLink />', () => {
	it('should render link with correct href', () => {
		const { getByRole } = render(
			<ProjectLink href='https://www.google.com'>Google</ProjectLink>,
		);

		const linkElement = getByRole('link');
		expect(linkElement).toHaveAttribute('href', 'https://www.google.com');
	});

	it('should render link with correct target', () => {
		const { getByRole } = render(
			<ProjectLink href='https://www.google.com'>Google</ProjectLink>,
		);

		const linkElement = getByRole('link');
		expect(linkElement).toHaveAttribute('target', '_blank');
	});

	it('should render link with correct children', () => {
		const { getByRole } = render(
			<ProjectLink href='https://www.google.com'>Google</ProjectLink>,
		);

		const buttonElement = getByRole('button');
		expect(buttonElement).toHaveTextContent('Google');
	});
});
