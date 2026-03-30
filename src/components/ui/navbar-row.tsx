import MenuItem, { type MenuItemProps } from '@mui/material/MenuItem';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavbarRowProps extends MenuItemProps<'li'> {
	children: React.ReactNode;
	hasBorderBottom?: boolean;
	isBurgerMenu?: boolean;
	href: string;
}

export function NavbarRow({
	isBurgerMenu,
	hasBorderBottom,
	href,
	...props
}: NavbarRowProps) {
	const pathname = usePathname();
	const selected = href.includes('/projects')
		? pathname.includes(href.split('/')[1])
		: pathname === href;

	if (isBurgerMenu) {
		return (
			<Link style={{ all: 'unset' }} href={href}>
				<MenuItem
					{...props}
					selected={selected}
					divider={hasBorderBottom}
					classes={{
						selected: 'text-zinc-50 bg-zinc-900 focus:border-zinc-700',
						root: 'bg-zinc-900 px-0 font-semibold capitalize tracking-wide py-3 text-zinc-400 focus:outline-none',
						divider: 'border border-zinc-700 focus:border-zinc-700',
					}}
					style={{ backgroundColor: '#18181b' }}
				/>
			</Link>
		);
	}

	return (
		<Link
			href={href}
			data-selected={selected}
			className='text-zinc-400 font-semibold capitalize tracking-wide data-[selected=true]:text-zinc-50'>
			{props.children}
		</Link>
	);
}
