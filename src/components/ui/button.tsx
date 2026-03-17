import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 'full' | 'small';
	types?: 'primary' | 'disabled' | 'outline' | 'icon';
};

const button = tv({
	base: 'py-2 rounded-lg',
	variants: {
		size: {
			full: 'w-full',
			small: 'w-max',
		},
		types: {
			primary: 'bg-blue-600 hover:bg-blue-500 px-8',
			disabled: 'bg-zinc-700 px-8',
			outline: 'bg-transparent px-8',
			icon: 'px-2 text-blue-600 hover:text-blue-500',
		},
	},
	defaultVariants: {
		size: 'small',
		types: 'primary',
	},
});

export function Button({ size, types, className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={twMerge(button({ size, types, className }))}
		/>
	);
}
