import Link, { type LinkProps } from 'next/link';
import type React from 'react';
import { tv } from 'tailwind-variants';

type BaseLinkProps = LinkProps & {
	children: React.ReactNode;
	className?: string;
	size?: 'full' | 'fit';
};

const link = tv({
	base: 'rounded-lg flex items-center',
	variants: {
		size: {
			full: 'w-full',
			fit: 'w-fit',
		},
	},
	defaultVariants: {
		size: 'full',
	},
});

export function BaseLink({ size, className, ...props }: BaseLinkProps) {
	return (
		<Link
			{...props}
			className={link({ size, className })}
			rel='noreferrer'
			target='_blank'
		/>
	);
}
