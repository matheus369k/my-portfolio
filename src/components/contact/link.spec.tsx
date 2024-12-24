'use client';

import { render } from '@testing-library/react';
import { ContactLink } from './link';

describe('<ContactLink />', () => {
	it('should render with only icon', () => {
		const { getByTestId, getByRole } = render(
			<ContactLink
				href='http://localhost:3000'
				onlyIcon
				data-testid='contactLink'>
				<svg data-testid='contactLinkIcon' />
			</ContactLink>,
		);

		const contactLinkElement = getByTestId('contactLink');
		expect(contactLinkElement).toBeVisible();

		const buttonElement = getByRole('button');
		expect(buttonElement).not.toHaveAttribute('className');

		const iconElement = getByTestId('contactLinkIcon');
		expect(iconElement).toBeVisible();
	});

	it('should render with text', () => {
		const { getByRole } = render(
			<ContactLink href='http://localhost:3000'>Contact</ContactLink>,
		);

		const buttonElement = getByRole('button');
		expect(buttonElement).toHaveAttribute('class');
	});

	it('should render with correct href', () => {
		const { getByTestId } = render(
			<ContactLink href='http://localhost:3000' data-testid='contactLink'>
				Contact
			</ContactLink>,
		);

		const contactLinkElement = getByTestId('contactLink');
		expect(contactLinkElement).toHaveAttribute('href', 'http://localhost:3000');
	});
});
