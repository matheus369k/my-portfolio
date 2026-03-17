import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import type { ReactNode } from 'react';
import { useCreateWebsiteViews } from './use-create-website-views';
import { queryKeyOfViewsProjects } from './use-get-website-views';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useCreateWebsiteViews request', () => {
	const requestUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`;
	const MockAxios = new AxiosMockAdapter(axios);
	const response = { status: 'ok' };

	it('invalidate query get website views when is success', async () => {
		const SpyInvalidateQueries = jest.spyOn(queryClient, 'invalidateQueries');
		MockAxios.onPost(requestUrl).reply(201, response);
		const { result } = renderHook(useCreateWebsiteViews, { wrapper });

		await result.current.mutateAsync();

		expect(SpyInvalidateQueries).toHaveBeenCalledWith({
			queryKey: queryKeyOfViewsProjects,
		});
	});

	it('no invalidate query get website views when is error', async () => {
		const SpyInvalidateQueries = jest.spyOn(queryClient, 'invalidateQueries');
		MockAxios.onPost(requestUrl).reply(401);
		const { result } = renderHook(useCreateWebsiteViews, { wrapper });

		await waitFor(() => expect(result.current.mutateAsync).rejects.toThrow());

		expect(SpyInvalidateQueries).not.toHaveBeenCalledWith({
			queryKey: queryKeyOfViewsProjects,
		});
	});
});
