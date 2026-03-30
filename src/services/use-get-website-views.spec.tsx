import { faker } from '@faker-js/faker/locale/pt_BR';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import type { ReactNode } from 'react';
import { useGetWebsiteViews } from './use-get-website-views';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetWebsiteViews request', () => {
	const requestUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`;
	const MockAxios = new AxiosMockAdapter(axios);
	const response = {
		accessTotal: 10,
		createAt: faker.date.anytime().toISOString(),
	};

	it('request returned data corrected formatter', async () => {
		MockAxios.onGet(requestUrl).reply(200, [response]);
		const { result } = renderHook(useGetWebsiteViews, { wrapper });

		await waitFor(() => {
			expect(result.current.data).toMatchObject(response);
		});
	});
});
