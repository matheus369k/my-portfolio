import { Chakra_Petch } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import './globals.css';
import { ReactQueryProvider } from '@/lib/react-query-provider';

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
			bg-zinc-900 text-zinc-50 antialiased min-h-screen h-full flex flex-col gap-8 justify-between overflow-x-hidden`}>
					<Header />
					<main className='max-w-7xl w-full mx-auto px-8'>{children}</main>
					<Footer />
				</body>
			</html>
		</ReactQueryProvider>
	);
}
