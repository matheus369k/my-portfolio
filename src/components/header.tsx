'use client';

import { NavbarRow } from './ui/navbar-row';
import Link from 'next/link';
import { ViewsOfWebsite } from './views-of-website';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from './burger-menu';
import { useLayoutEffect, useState } from 'react';
import { ul as MotionUl, header as MotionHeader } from 'motion/react-client';
import { SelectTypeProjects } from './select-project-type';

const navbarFieldsData = [
	{ name: 'apresentação', path: '/', borderBottom: true },
	{ name: 'aprendizado', path: '/learn', borderBottom: true },
	{ name: 'projetos', path: '/projects/all', borderBottom: true },
	{ name: 'fale comigo', path: '/talk-me', borderBottom: true },
	{ name: 'sobre mim', path: '/about-me', borderBottom: false },
];

export function Header() {
	const pathname = usePathname();
	const [isDesktopMode, setIsDesktopMode] = useState(false);
	const isProjectPage = pathname.includes('/projects');
	const isHomePage = pathname === '/';

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
		<MotionHeader
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			data-is-home-or-projects-page={isHomePage || isProjectPage}
			className='relative flex justify-between items-center px-4 border-b border-zinc-700 h-min bg-zinc-900 md:px-8 data-[is-not-home-or-projects-page=true]:mb-6'>
			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<'}M.G {'/>'}
			</Link>

			{isHomePage && <ViewsOfWebsite />}
			{isProjectPage && <SelectTypeProjects />}

			{renderNavBarUI()}
		</MotionHeader>
	);
}
