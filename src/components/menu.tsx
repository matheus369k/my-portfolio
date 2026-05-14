'use client';

import { useEffect, useState } from 'react';
import { NavbarRow } from './ui/navbar-row';
import { BurgerMenu } from './burger-menu';
import { ul as MotionUl } from 'motion/react-client';

const navbarFieldsData = [
	{ name: 'apresentação', path: '/', borderBottom: true },
	{ name: 'aprendizado', path: '/learn', borderBottom: true },
	{ name: 'projetos', path: '/projects/all', borderBottom: true },
	{ name: 'fale comigo', path: '/talk-me', borderBottom: true },
	{ name: 'sobre mim', path: '/about-me', borderBottom: false },
];

export function Menu() {
	const [isDesktopMode, setIsDesktopMode] = useState(false);

	useEffect(() => {
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
