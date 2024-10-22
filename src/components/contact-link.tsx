import type { ComponentProps } from 'react';
import { FONT_BOLD } from '@/app/layout';
import Link from 'next/link';

interface ContactLinkProps {
	link: string;
	children: React.ReactNode;
	onlyIcon?: boolean;
}

export function ContactLink({
	link,
	children,
	onlyIcon = false,
}: ContactLinkProps) {
	return (
		<Link
			className='rounded-lg overflow-hidden'
			href={link}
			rel='noreferrer'
			target='_blank'>
			{onlyIcon ? (
				<button type='button'>{children}</button>
			) : (
				<button
					type='button'
					className={`${FONT_BOLD.className} px-8 py-2 bg-blue-600 hover:bg-blue-500`}>
					{children}
				</button>
			)}
		</Link>
	);
}
