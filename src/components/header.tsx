import { NavbarRow } from './navbar-row';
import Link from 'next/link';

export function Header() {
	return (
		<header
			className='flex justify-between items-center px-8 border-b border-zinc-700 h-min'>
			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<M.G />'}
			</Link>

			<nav>
				<ul className='font-semibold flex gap-6 capitalize tracking-wide transition-colors'>
					<NavbarRow href='/' text='apresentação' />
					<NavbarRow href='/learn' text='aprendizado' />
					<NavbarRow href='/projects' text='projetos' />
					<NavbarRow href='/talk-me' text='fale comigo' />
					<NavbarRow href='/about-me' text='sobre min' />
				</ul>
			</nav>
		</header>
	);
}
