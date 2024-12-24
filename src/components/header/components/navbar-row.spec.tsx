'use client';

import { render } from '@testing-library/react';
import { NavbarRow } from './navbar-row';

jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: () => '/',
}));

describe('<NavBarRow />', () => {
	it('should render default navbar-row', () => {
		const { getByRole } = render(<NavbarRow href='/' text='home' />);

		const listItemElement = getByRole('listitem');

		expect(listItemElement).not.toHaveClass('border-b');
		expect(listItemElement).not.toHaveClass('text-zinc-400');

		const linkItemElement = getByRole('link');

		expect(linkItemElement).toHaveAttribute('href', '/');
		expect(linkItemElement).toHaveTextContent('home');
	});

	it('should render navbar-row not current page', () => {
		const { getByRole } = render(<NavbarRow href='/about' text='about' />);

		const listItemElement = getByRole('listitem');

		expect(listItemElement).toHaveClass('text-zinc-400');
	});

    it('should render navbar-row with border', ()=> {
		const { getByRole } = render(
			<NavbarRow href='/' text='home' hasBorderBottom />,
		);

		const listItemElement = getByRole('listitem');

		expect(listItemElement).toHaveClass('border-b');
    })
});
