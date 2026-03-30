import { findByText, render, screen, waitFor } from '@testing-library/react';
import { Header } from './header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { faker } from '@faker-js/faker/locale/pt_BR';
import userEvent from '@testing-library/user-event';
import { SelectTypeProjects } from './select-project-type';

const MockUseRouterPush = jest.fn();
const MockUserPathnameValue = jest.fn().mockReturnValue('/projects/all');
jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	usePathname: jest.fn(() => MockUserPathnameValue()),
	useRouter: jest.fn(() => ({
		push: MockUseRouterPush,
	})),
}));

describe('Header component', () => {
	const userEvents = userEvent.setup();

	it('open dropdown selected projects type when clicked in hir', async () => {
		render(<SelectTypeProjects />);

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

	it('close selected project layout when clicked one item', async () => {
		render(<SelectTypeProjects />);

		await userEvents.click(screen.getByText(/Todos/i));
		await userEvents.click(screen.getByText(/Full Stack/i));

		await waitFor(
			() => {
				expect(screen.queryByText(/Todos/i)).toBeNull();
			},
			{ timeout: 2000 },
		);
	});

	it('call useRouter>push with router path when clicked one item', async () => {
		render(<SelectTypeProjects />);

		await userEvents.click(screen.getByText(/Todos/i));
		await userEvents.click(screen.getByText(/Full Stack/i));

		expect(MockUseRouterPush).toHaveBeenCalledWith('/projects/full-stack');
	});

	it('selected project type than showing in url path when is rendered', () => {
		MockUserPathnameValue.mockReturnValue('/projects/landing-page');
		render(<SelectTypeProjects />);

		screen.getByText(/Landing Page/i);
	});
});
