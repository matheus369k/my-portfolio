import { Roboto } from 'next/font/google';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import '@/styles/globals.css';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
	title: 'M.G - Portfolio',
	description:
		'O Site e um portfólio pessoal, onde é possível ver os projetos desenvolvidos por mim, e também me contatar. Ele visa facilitar o entendimento do que faço, e meu nível atual de conhecimento.',
	openGraph: {
		title: 'M.G - Portfolio',
		description:
			'O Site e um portfólio pessoal, onde é possível ver os projetos desenvolvidos por mim, e também me contatar. Ele visa facilitar o entendimento do que faço, e meu nível atual de conhecimento.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/matheus369k/my-portfolio/refs/heads/main/.github/portfolio-preview.png',
				type: 'image/png',
				alt: 'M.G - Portfolio',
			},
		],
		url: 'https://my-portfolio-ten-smoky-67.vercel.app/?vercelToolbarCode=aEPvzsBZlotMgxU',
		type: 'website',
		locale: 'pt_BR',
		siteName: 'M.G - Portfolio',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.className}
			bg-zinc-900 text-zinc-100 antialiased min-h-dvh grid grid-cols-1 grid-rows-[auto,_1fr_auto] gap-6 overflow-x-hidden scroll-smooth`}>
				<Header />
				<main className='max-w-7xl w-full h-full mx-auto px-2 overflow-x-hidden md:px-8'>
					<Suspense>{children}</Suspense>
				</main>
				<Footer />
			</body>
		</html>
	);
}
