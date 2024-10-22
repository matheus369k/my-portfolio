import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

interface AvatarBorderProps extends ComponentProps<'div'> {
	animation?: 'reverse' | 'normal';
	hiddenBorder?: 'top' | 'left' | 'right' | 'bottom';
}

export function AvatarBorder({
	animation,
	hiddenBorder,
	className,
	...props
}: AvatarBorderProps) {
	const borderAvatar = tv({
		base: 'rounded-full border border-blue-600 animate-pulse',
		variants: {
			animation: {
				reverse: 'animation-rotate-border-reverse',
				normal: 'animation-rotate-border',
			},
			hiddenBorder: {
				left: 'border-l-transparent',
				right: 'border-r-transparent',
				top: 'border-t-transparent',
				bottom: 'border-b-transparent',
			},
		},
		defaultVariants: {
			animation: 'normal',
			hiddenBorder: 'top',
		},
	});
	return (
		<div
			{...props}
			className={twMerge(borderAvatar({ animation, hiddenBorder }), className)}
		/>
	);
}
