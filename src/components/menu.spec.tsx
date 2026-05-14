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

	afterEach(() => {
		global.window.innerWidth = 767;
	});

	it('render menu normal when width is largest than 768px', () => {
		global.window.innerWidth = 769;
		render(<Menu />);

		expect(screen.queryByLabelText(/burger-navbar-menu/i)).toBeNull();
		screen.getByLabelText(/desktop-navbar-menu/i);
	});

	it('render menu burger when width is less than 768px', () => {
		render(<Menu />);

		expect(screen.queryByLabelText(/desktop-navbar-menu/i)).toBeNull();
		screen.getByLabelText(/burger-navbar-menu/i);
	});

	it('open and close burger menu when clicked in toggle menu', async () => {
		render(<Menu />);

		expect(screen.queryByText(/home/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/open-menu/i));
		await userEvents.click(await screen.findByText(/apresentação/i));

		await waitFor(() => {
			expect(screen.queryByText(/home/i)).toBeNull();
		});
	});
});
