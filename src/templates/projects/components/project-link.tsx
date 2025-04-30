import Link, { type LinkProps } from 'next/link';
import type React from 'react';

type ProjectLinksProps = LinkProps & {
	children: React.ReactNode;
};

export function ProjectLinkRoot({ children, ...props }: ProjectLinksProps) {
	return (
		<Link {...props} className='rounded-lg overflow-hidden' target='_blank'>
			{children}
		</Link>
	);
}

type ProjectLinkContentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ProjectLinkContent({ ...props }: ProjectLinkContentProps) {
	return <button {...props} type='button' className='px-8 py-2 bg-blue-600' />;
}
