import Link, { type LinkProps } from 'next/link';
import type React from 'react';

type ProjectLinksProps = LinkProps & {
	children: React.ReactNode;
};

export function ProjectLinkRoot({ ...props }: ProjectLinksProps) {
	return (
		<Link
			{...props}
			className='rounded-lg overflow-hidden w-full sm:w-auto flex'
			target='_blank'
		/>
	);
}
