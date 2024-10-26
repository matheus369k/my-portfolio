'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarRowProps = LinkProps & {
	text: string;
};

export function NavbarRow({ text, href }: NavbarRowProps) {
	const pathName = usePathname();

	return (
		<li {...(pathName === href ? { className: 'text-zinc-400' } : '')}>
			<Link href={href}>{text}</Link>
		</li>
	);
}
