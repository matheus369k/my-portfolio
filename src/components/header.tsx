'use client';

import Link from 'next/link';
import { ViewsOfWebsite } from './views-of-website';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { SelectTypeProjects } from './select-project-type';
import { Menu } from './menu';

export function Header() {
	const pathname = usePathname();
	const isProjectPage = pathname.includes('/projects');
	const isHomePage = pathname === '/';

	return (
		<header
			data-is-home-or-projects-page={isHomePage || isProjectPage}
			className='bg-zinc-900 z-20 relative flex justify-between items-center px-4 border-b border-zinc-700 h-min md:px-8 data-[is-not-home-or-projects-page=true]:mb-6'>
			<Link
				href='/'
				className='font-bold text-blue-600 text-3xl uppercase py-4'>
				{'<'}M.G {'/>'}
			</Link>

			{isHomePage && <ViewsOfWebsite />}
			{isProjectPage && <SelectTypeProjects />}

			<Suspense>
				<Menu />
			</Suspense>
		</header>
	);
}
