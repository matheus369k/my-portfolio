'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { lazy, type ReactNode } from 'react';

const ParticlesCanvasLazy = lazy(() => import('@/components/ui/particles'));
const AlertMessageLazy = lazy(() => import('@/components/ui/alert-message'));

const queryClient = new QueryClient();
export function RootContainer({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				{children}

				<ParticlesCanvasLazy />
				<AlertMessageLazy />
			</AppRouterCacheProvider>
		</QueryClientProvider>
	);
}
