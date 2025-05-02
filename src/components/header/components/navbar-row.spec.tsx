import { render, screen } from '@testing-library/react';
import { NavbarRow } from './navbar-row';

jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: () => '/',
}));

describe('<NavBarRow />', () => {
	it('should render correctly', () => {
		render(<NavbarRow href='/about'>about</NavbarRow>);
		const listItem = screen.getByRole('listitem');
		const linkElement = screen.getByRole('link', { name: /about/i });
		expect(linkElement).toHaveAttribute('href', '/about');
		expect(listItem).not.toHaveClass('border-b');
		expect(listItem).toHaveClass('text-zinc-400');
	});

	it('should have border bottom when hasBorderBottom prop is true', () => {
		render(
			<NavbarRow href='/about' hasBorderBottom>
				about
			</NavbarRow>,
		);
		const listItem = screen.getByRole('listitem');
		expect(listItem).toHaveClass('border-b');
	});

	it('should text color be white when pathname is equal href', () => {
		render(
			<NavbarRow href='/' hasBorderBottom>
				home
			</NavbarRow>,
		);
		const listItem = screen.getByRole('listitem');
		expect(listItem).not.toHaveClass('text-zinc-400');
	});
});
