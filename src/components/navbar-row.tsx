'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarRowProps {
    value: string;
    href: string;
}

export function NavbarRow({href, value}: NavbarRowProps) {
    const pathName = usePathname();

	return (
		<li {...(pathName === href ? {className: "text-zinc-400"} : '')} >
			<Link href={href}>{value}</Link>
		</li>
	);
}
