import Link, { type LinkProps } from 'next/link';

type ContactLinkProps = LinkProps & {
	children: React.ReactNode;
	onlyIcon?: boolean;
};

export function ContactLink({
	children,
	onlyIcon = false,
	...props
}: ContactLinkProps) {
	return (
		<Link
			{...props}
			className='rounded-lg overflow-hidden'
			rel='noreferrer'
			target='_blank'>
			{onlyIcon ? (
				<button type='button'>{children}</button>
			) : (
				<button
					type='button'
					className='font-bold px-8 py-2 bg-blue-600 hover:bg-blue-500'>
					{children}
				</button>
			)}
		</Link>
	);
}
