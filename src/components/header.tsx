import { FONT_BOLD, FONT_SEMIBOLD } from '@/app/layout';
import Link from 'next/link';
import { NavbarRow } from './navbar-row';

export function Header() {
	return (
		<header
			className='flex justify-between items-center px-8 border-b border-zinc-700 h-min'>
			<Link
				href='/'
				className={`${FONT_BOLD.className} text-blue-600 text-3xl uppercase py-4`}>
				{'<M.G />'}
			</Link>

			<nav>
				<ul className={`${FONT_SEMIBOLD.className} flex gap-6 capitalize tracking-wide transition-colors`}>
					<NavbarRow href='/' value='apresentação' />
					<NavbarRow href='/learn' value='aprendizado' />
					<NavbarRow href='/projects' value='projetos' />
					<NavbarRow href='/talk-me' value='fale comigo' />
					<NavbarRow href='/about-me' value='sobre min' />
				</ul>
			</nav>
		</header>
	);
}
