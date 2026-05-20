'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const ParticlesCanvasDynamic = dynamic(
	() => import('@/components/ui/particles'),
	{ ssr: false },
);
const AlertMessageDynamic = dynamic(
	() => import('@/components/ui/alert-message'),
	{ ssr: false },
);

const queryClient = new QueryClient();
export function RootContainer({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				{children}

				<ParticlesCanvasDynamic />
				<AlertMessageDynamic />
			</AppRouterCacheProvider>
		</QueryClientProvider>
	);
}
