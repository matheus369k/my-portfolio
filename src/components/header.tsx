'use client';

import { NavbarRow } from './ui/navbar-row';
import Link from 'next/link';
import { ViewsOfWebsite } from './views-of-website';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from './burger-menu';
import { useLayoutEffect, useState } from 'react';
import { ul as MotionUl } from 'motion/react-client';

const navbarFieldsData = [
	{ name: 'apresentação', path: '/', borderBottom: true },
	{ name: 'aprendizado', path: '/learn', borderBottom: true },
	{ name: 'projetos', path: '/projects', borderBottom: true },
	{ name: 'fale comigo', path: '/talk-me', borderBottom: true },
	{ name: 'sobre mim', path: '/about-me', borderBottom: false },
];

export function Header() {
	const isNotHomePage = usePathname() !== '/';
	const [isDesktopMode, setIsDesktopMode] = useState(false);

	useLayoutEffect(() => {
		handleDetectedScreenMode();
		window.addEventListener('resize', handleDetectedScreenMode);

		return () => {
			window.removeEventListener('resize', handleDetectedScreenMode);
		};
	}, []);

	function handleDetectedScreenMode() {
		const isScreenSizeOfDesktopMode = window.innerWidth >= 768;
		if (isScreenSizeOfDesktopMode) {
			setIsDesktopMode(true);
			return;
		}
		setIsDesktopMode(false);
	}

	function renderNavBarUI() {
		if (isDesktopMode) {
			return (
				<MotionUl
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					aria-label='desktop-navbar-menu'
					className='flex items-center gap-6'>
					{navbarFieldsData.map(({ name, borderBottom, path }) => (
						<NavbarRow href={path} hasBorderBottom={borderBottom} key={name}>
							{name}
						</NavbarRow>
					))}
				</MotionUl>
			);
		}

		return <BurgerMenu navbarFields={navbarFieldsData} />;
	}

	return (
		<header
			data-is-not-home-page={isNotHomePage}
			className='relative flex justify-between items-center px-4 border-b border-zinc-700 h-min bg-zinc-900 md:px-8 data-[is-not-home-page=false]:mb-6'>
			<ViewsOfWebsite isNotHomePage={isNotHomePage} />

			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<'}M.G {'/>'}
			</Link>

			{renderNavBarUI()}
		</header>
	);
}
