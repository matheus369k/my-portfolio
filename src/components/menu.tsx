'use client';

import { NavbarRow } from './ui/navbar-row';
import { BurgerMenu } from './burger-menu';

const navbarFieldsData = [
	{ name: 'apresentação', path: '/', borderBottom: true },
	{ name: 'aprendizado', path: '/learn', borderBottom: true },
	{ name: 'projetos', path: '/projects/all', borderBottom: true },
	{ name: 'fale comigo', path: '/talk-me', borderBottom: true },
	{ name: 'sobre mim', path: '/about-me', borderBottom: false },
];

export function Menu() {
	return (
		<>
			<ul
				aria-label='desktop-navbar-menu'
				className='md:flex items-center gap-6 hidden'>
				{navbarFieldsData.map(({ name, borderBottom, path }) => (
					<NavbarRow href={path} hasBorderBottom={borderBottom} key={name}>
						{name}
					</NavbarRow>
				))}
			</ul>

			<BurgerMenu navbarFields={navbarFieldsData} />
		</>
	);
}
