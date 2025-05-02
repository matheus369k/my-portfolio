import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarRowProps extends LinkProps {
	children: React.ReactNode;
	hasBorderBottom?: boolean;
}

export function NavbarRow({ hasBorderBottom, ...props }: NavbarRowProps) {
	const pathName = usePathname();
	const pathNameIsEqualHref = pathName === props.href;
	return (
		<li
			className={`py-3 md:py-0 border-zinc-700 md:border-none ${pathNameIsEqualHref ? '' : 'text-zinc-400'} ${hasBorderBottom ? 'border-b' : ''}`}>
			<Link {...props} />
		</li>
	);
}
