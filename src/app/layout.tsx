import { ReactQueryProvider } from '@/lib/react-query-provider';
import { Chakra_Petch } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';
import './globals.css';

const chackraPetch = Chakra_Petch({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-chackra-petch',
});

export const metadata: Metadata = {
	title: 'M.G - Portfolio',
	description: 'Portfolio de desenvolvedor web',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReactQueryProvider>
			<html lang='en'>
				<body
					className={`${chackraPetch.className}
			bg-zinc-900 text-zinc-50 antialiased min-h-dvh grid grid-cols-1 grid-rows-[auto,_1fr_auto] gap-6 overflow-x-hidden scroll-smooth`}>
					<Header />
					<main className='max-w-7xl w-full h-full mx-auto px-8 overflow-x-hidden'>
						{children}
					</main>
					<Footer />
				</body>
			</html>
		</ReactQueryProvider>
	);
}
