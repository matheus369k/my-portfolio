import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

type ProjectLinkContentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 'full' | 'small';
	types?: 'primary' | 'disabled' | 'outline';
};

export function Button({
	size,
	types,
	className,
	...props
}: ProjectLinkContentProps) {
	const button = tv({
		base: 'px-8 py-2',
		variants: {
			size: {
				full: 'w-full',
				small: 'w-fit',
			},
			types: {
				primary: 'bg-blue-600',
				disabled: 'bg-zinc-700',
				outline: 'bg-transparent',
			},
		},
		defaultVariants: {
			size: 'small',
			types: 'primary',
		},
	});
	return (
		<button
			{...props}
			type='button'
			className={twMerge(button({ size, types }), className)}
		/>
	);
}
