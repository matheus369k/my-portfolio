import { render, screen, waitFor } from '@testing-library/react';
import { ViewsOfWebsite } from './views-of-website';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { faker } from '@faker-js/faker/locale/pt_BR';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 0, staleTime: 1000 * 60 } },
});
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('ViewsOfWebsite component', () => {
	const response = {
		accessTotal: 10,
		createAt: faker.date.anytime().toISOString(),
	};
	const requestUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`;
	const MockAxios = new AxiosMockAdapter(axios);

	afterEach(() => {
		queryClient.clear();
		MockAxios.reset();
	});

	it('rendered count when finished request ', async () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<ViewsOfWebsite />, { wrapper });

		await waitFor(() => {
			expect(MockAxios.history[0]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});
			expect(MockAxios.history[1]).toBeUndefined();
		});

		await screen.findByText(/10/, {}, { timeout: 2000 });
	});
});
