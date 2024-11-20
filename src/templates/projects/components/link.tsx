import Link, { type LinkProps } from 'next/link';

type ProjectLinksProps = LinkProps & {
	children: React.ReactNode;
};

export function ProjectLink({ href, children }: ProjectLinksProps) {
	return (
		<Link className='rounded-lg overflow-hidden' target='_blank' href={href}>
			<button type='button' className='px-8 py-2 bg-blue-600'>
				{children}
			</button>
		</Link>
	);
}
