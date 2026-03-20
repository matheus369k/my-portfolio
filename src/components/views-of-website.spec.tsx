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
	const response = { views: 10, createAt: faker.date.anytime().toISOString() };
	const requestUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`;
	const MockAxios = new AxiosMockAdapter(axios);

	afterEach(() => {
		queryClient.clear();
		MockAxios.reset();
	});

	it('update views request when first rendered and get views is accept', async () => {
		MockAxios.onPatch(requestUrl).reply(201, { status: 'ok' });
		MockAxios.onPost(requestUrl).reply(201, { status: 'ok' });
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<ViewsOfWebsite isNotHomePage />, { wrapper });

		await waitFor(() => {
			expect(MockAxios.history[0]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});
			expect(MockAxios.history[1]).toMatchObject({
				method: /PATCH/,
				url: requestUrl,
			});
			expect(MockAxios.history[2]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});
			expect(MockAxios.history[3]).toBeUndefined();
		});
	});

	it('create views when is first rendered and get views is rejected ', async () => {
		MockAxios.onPatch(requestUrl).reply(201, { status: 'ok' });
		MockAxios.onPost(requestUrl).reply(201, { status: 'ok' });
		MockAxios.onGet(requestUrl).replyOnce(401);
		MockAxios.onGet(requestUrl).reply(200, [response]);
		render(<ViewsOfWebsite isNotHomePage />, { wrapper });

		await waitFor(() => {
			expect(MockAxios.history[0]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});

			expect(MockAxios.history[1]).toMatchObject({
				method: /POST/,
				url: requestUrl,
			});

			expect(MockAxios.history[2]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});

			expect(MockAxios.history[3]).toMatchObject({
				method: /PATCH/,
				url: requestUrl,
			});

			expect(MockAxios.history[4]).toMatchObject({
				method: /GET/,
				url: requestUrl,
			});

			expect(MockAxios.history[5]).toBeUndefined();
		});
	});
});
