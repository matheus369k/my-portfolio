import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps extends ComponentProps<'h1'> {}

export function Title({ className, children, ...props }: TitleProps) {
	return (
		<h1
			{...props}
			className={twMerge(
				'text-2xl font-bold leading-relaxed pl-4 border-l-4 border-blue-600 rounded-lg md:text-3xl md:pl-8',
				className,
			)}>
			{children}
		</h1>
	);
}
