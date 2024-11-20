'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarRowProps = LinkProps & {
	text: string;
	hasBorderBottom?: boolean;
};

export function NavbarRow({ text, href, hasBorderBottom }: NavbarRowProps) {
	const pathName = usePathname();
	const pathNameIsEqualHerf = pathName === href;

	return (
		<li
			className={`py-3 md:py-0 ${pathNameIsEqualHerf ? '' : 'text-zinc-400'} ${hasBorderBottom ? 'border-b' : ''} border-zinc-700 md:border-none`}>
			<Link href={href}>{text}</Link>
		</li>
	);
}
