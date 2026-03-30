import { findByText, render, screen, waitFor } from '@testing-library/react';
import { Header } from './header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { faker } from '@faker-js/faker/locale/pt_BR';
import userEvent from '@testing-library/user-event';

const MockUserPathnameValue = jest.fn().mockReturnValue('/');
jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: jest.fn(() => MockUserPathnameValue()),
	useRouter: jest.fn(() => ({
		push: jest.fn(),
	})),
}));

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Header component', () => {
	const response = { views: 10, createAt: faker.date.anytime().toISOString() };
	const requestUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`;
	const MockAxios = new AxiosMockAdapter(axios);
	const userEvents = userEvent.setup();

	afterEach(() => {
		queryClient.clear();
		MockAxios.reset();
		global.window.innerWidth = 767;
	});

	it('render navbar normal when width is largest than 768px', () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		global.window.innerWidth = 769;
		render(<Header />, { wrapper });

		expect(screen.queryByLabelText(/burger-navbar-menu/i)).toBeNull();
		screen.getByLabelText(/desktop-navbar-menu/i);
	});

	it('render navbar burger when width is less than 768px', () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<Header />, { wrapper });

		expect(screen.queryByLabelText(/desktop-navbar-menu/i)).toBeNull();
		screen.getByLabelText(/burger-navbar-menu/i);
	});

	it('open and close burger menu when clicked in toggle menu', async () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		MockUserPathnameValue.mockReturnValue('/');
		render(<Header />, { wrapper });

		expect(screen.queryByText(/home/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/open-menu/i));
		await userEvents.click(await screen.findByText(/apresentação/i));

		await waitFor(() => {
			expect(screen.queryByText(/home/i)).toBeNull();
		});
	});

	it('showing website views layout when is home page', async () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<Header />, { wrapper });

		await screen.findByText(/10/, {}, { timeout: 2000 });
	});

	it("hidden website views layout when isn't home page", async () => {
		MockUserPathnameValue.mockReturnValue('/projects/all');
		render(<Header />, { wrapper });

		await waitFor(
			() => {
				expect(screen.queryByText(/10/)).toBeNull();
			},
			{ timeout: 2000 },
		);
	});

	it('showing selected project layout when is project page', () => {
		MockUserPathnameValue.mockReturnValue('/projects/all');
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<Header />, { wrapper });

		screen.getByText(/Todos/i);
	});

	it("hidden selected project layout when isn't project page", () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		MockUserPathnameValue.mockReturnValue('/');
		render(<Header />, { wrapper });

		expect(screen.queryByText(/Todos/i)).toBeNull();
	});

	it('open dropdown selected projects type when clicked in hir', async () => {
		MockUserPathnameValue.mockReturnValue('/projects/all');
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<Header />, { wrapper });

		await waitFor(
			() => {
				expect(screen.queryByText(/Full Stack/i)).toBeNull();
			},
			{ timeout: 2000 },
		);

		await userEvents.click(screen.getByText(/Todos/i));

		await screen.findByText(/Full Stack/i);
		await screen.findByText(/Landing Page/i);
	});
});
