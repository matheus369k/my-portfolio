import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BurgerMenu } from './burger-menu';
import userEvent from '@testing-library/user-event';
import React, { act } from 'react';
import {} from '@mui/material';

describe('BurgerMenu component', () => {
	const userEvents = userEvent.setup();

	const props = [
		{ name: 'home', path: '/', borderBottom: true },
		{ name: 'about-me', path: '/about-me', borderBottom: false },
	];

	it('open burger menu when clicked in toggle menu', async () => {
		render(<BurgerMenu navbarFields={props} />);

		expect(screen.queryByText(/home/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/open-menu/i));

		await waitFor(() => screen.getByText(/home/i));
	});

	it('close burger menu when clicked in menu option', async () => {
		render(<BurgerMenu navbarFields={props} />);

		expect(screen.queryByText(/home/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/open-menu/i));
		await userEvents.click(screen.getByText(/home/i));

		await waitFor(() => {
			expect(screen.queryByText(/home/i)).toBeNull();
		});
	});
});
