'use client';

import { render } from '@testing-library/react';
import { ContactLinks } from './links';

jest.mock('./link', () => ({
	ContactLink: ({
		onlyIcon = false,
		children,
		...props
	}: { children: React.ReactNode; onlyIcon?: boolean }) => (
		<a data-only-icon={onlyIcon} {...props} data-testid='contactLink'>
			{children}
		</a>
	),
}));

describe('<ContactLinks />', () => {
	it('should render all links', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linksElements = getAllByTestId('contactLink');
		expect(linksElements).toHaveLength(4);
	});

	it('should receive correct href from env file ( cv )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkCvElement = getAllByTestId('contactLink')[0];
		expect(linkCvElement).toHaveAttribute(
			'href',
			'https://localhost:8000/media/cv.pdf',
		);
	});

	it('should receive correct href from env file ( linkedin )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkLinkedinElement = getAllByTestId('contactLink')[1];
		expect(linkLinkedinElement).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/username-id',
		);
	});

	it('should receive correct href from env file ( github )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkGithubElement = getAllByTestId('contactLink')[2];
		expect(linkGithubElement).toHaveAttribute(
			'href',
			'https://github.com/username',
		);
	});

	it('should receive correct href from env file ( mail )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkMailElement = getAllByTestId('contactLink')[3];
		expect(linkMailElement).toHaveAttribute(
			'href',
			'https://gmailto:useremail@gmail.com',
		);
	});

	it('should render with only text ( cv )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkCvElement = getAllByTestId('contactLink')[0];
		expect(linkCvElement).toHaveAttribute('data-only-icon', 'false');
	});

	it('should render link with only icon ( linkedin)', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkLinkedinElement = getAllByTestId('contactLink')[1];
		expect(linkLinkedinElement).toHaveAttribute('data-only-icon', 'true');
	});

	it('should render link with only icon ( github )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkGithubElement = getAllByTestId('contactLink')[2];
		expect(linkGithubElement).toHaveAttribute('data-only-icon', 'true');
	});

	it('should render link with only icon ( mail )', () => {
		const { getAllByTestId } = render(<ContactLinks />);

		const linkMailElement = getAllByTestId('contactLink')[3];
		expect(linkMailElement).toHaveAttribute('data-only-icon', 'true');
	});
});
