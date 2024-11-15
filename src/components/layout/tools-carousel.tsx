import { getTools } from '@/services/get-tools';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ToolsCarouselProps extends ComponentProps<'div'> {}

export async function ToolsCarousel({
	className,
	...props
}: ToolsCarouselProps) {
	const { tools } = await getTools();

	return (
		<div
			{...props}
			className={twMerge(
				'w-screen flex justify-between items-center',
				className,
			)}>
			{tools.map((tool) => {
				return (
					<Image
						key={tool._id}
						className='tracking-normal'
						src={tool.svg_url}
						title={tool.name}
						height={30}
						width={30}
						alt=''
					/>
				);
			})}
		</div>
	);
}
