'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyledEngineProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();
export function RootContainer({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				<StyledEngineProvider injectFirst={true}>
					{children}
				</StyledEngineProvider>
			</AppRouterCacheProvider>
		</QueryClientProvider>
	);
}
