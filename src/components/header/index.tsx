'use client';

import { AlignJustify, X } from 'lucide-react';
import { NavbarRow } from './components/navbar-row';
import Link from 'next/link';
import { useToggleMenu } from './hooks/use-toggle-menu';
import { useEffect } from 'react';
import axios from 'axios';

export function Header() {
	const { isMenuOpen, handleToggleMenu } = useToggleMenu();

	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/hearth`)
			.then((response) => {
				console.log(response.data);
			});
	}, []);

	return (
		<header className='relative flex justify-between items-center px-4 border-b border-zinc-700 h-min md:px-8'>
			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<'}M.G {'/>'}
			</Link>

			<nav className='flex flex-col z-10'>
				<button
					onClick={handleToggleMenu}
					type='button'
					aria-label={isMenuOpen ? 'open menu' : 'close menu'}
					className='text-blue-600 ml-auto md:hidden z-20'>
					{isMenuOpen ? (
						<X className='size-10' />
					) : (
						<AlignJustify className='size-10' />
					)}
				</button>

				<ul
					className={`px-9 bg-zinc-900 font-semibold gap-6 capitalize tracking-wide rounded-bl-lg transition-colors md:flex md:px-0 ${isMenuOpen ? 'absolute top-12 right-0' : 'hidden'}`}>
					<NavbarRow hasBorderBottom href='/'>
						apresentação
					</NavbarRow>

					<NavbarRow hasBorderBottom href='/learn'>
						aprendizado
					</NavbarRow>

					<NavbarRow hasBorderBottom href='/projects'>
						projetos
					</NavbarRow>

					<NavbarRow hasBorderBottom href='/talk-me'>
						fale comigo
					</NavbarRow>

					<NavbarRow href='/about-me'>sobre mim</NavbarRow>
				</ul>
			</nav>
		</header>
	);
}
