'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();
export function RootContainer({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				{children}
			</AppRouterCacheProvider>
		</QueryClientProvider>
	);
}
