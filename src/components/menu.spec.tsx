import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from './menu';

const MockUserPathnameValue = jest.fn().mockReturnValue('/');
jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: jest.fn(() => MockUserPathnameValue()),
}));

describe('Menu component', () => {
	const userEvents = userEvent.setup();

	it('render menu normal when width is largest than 768px', () => {
		render(<Menu />);

		expect(screen.getByLabelText(/burger-navbar-menu/i)).toHaveClass(
			'md:hidden',
		);
	});

	it('render menu burger when width is less than 768px', () => {
		render(<Menu />);

		expect(screen.getByLabelText(/desktop-navbar-menu/i)).toHaveClass('hidden');
	});

	it('open and close burger menu when clicked in toggle menu', async () => {
		render(<Menu />);

		expect(screen.queryByText(/burger-navbar-menu/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/open-menu/i));
		await userEvents.click((await screen.findAllByText(/apresentação/i))[1]);

		await waitFor(() => {
			expect(screen.queryByText(/burger-navbar-menu/i)).toBeNull();
		});
	});
});
