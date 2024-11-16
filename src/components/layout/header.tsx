'use client';

import { AlignJustify, X } from 'lucide-react';
import { NavbarRow } from './navbar-row';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleOpenCloseMenu() {
		setIsMenuOpen((state)=>{
			return !state;
		})
	}

	return (
		<header className='relative flex justify-between items-center px-4 border-b border-zinc-700 h-min md:px-8'>
			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<'}M.G {'/>'}
			</Link>

			<nav className='flex flex-col z-10'>
				<button onClick={handleOpenCloseMenu} type="button" className='text-blue-600 ml-auto md:hidden z-20'>
					{isMenuOpen ? <X className='size-10' />  : <AlignJustify className='size-10' />}	
				</button>

				<ul className={`px-9 bg-zinc-900 font-semibold gap-6 capitalize tracking-wide rounded-bl-lg transition-colors ${isMenuOpen ? 'absolute top-12 right-0' : 'hidden'} md:flex`}>
					<NavbarRow hasBorderBottom href='/' text='apresentação' />
					<NavbarRow hasBorderBottom href='/learn' text='aprendizado' />
					<NavbarRow hasBorderBottom href='/projects' text='projetos' />
					<NavbarRow hasBorderBottom href='/talk-me' text='fale comigo' />
					<NavbarRow href='/about-me' text='sobre mim' />
				</ul>
			</nav>
		</header>
	);
}
