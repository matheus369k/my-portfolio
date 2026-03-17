import type { Tool } from '@/@types';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ToolsCarouselProps = ComponentProps<'div'> & {
	tools: {
		front_end: Tool[];
		back_end: Tool[];
		another: Tool[];
	};
};

export function ToolsCarousel({
	tools,
	className,
	...props
}: ToolsCarouselProps) {
	const toolsWithoutCategory = [
		...tools.front_end,
		...tools.back_end,
		...tools.another,
	];
	return (
		<div
			{...props}
			className={twMerge(
				'w-screen flex justify-between items-center',
				className,
			)}>
			{toolsWithoutCategory.map((tool) => {
				return (
					<Image
						key={tool._id}
						className='tracking-normal'
						src={tool.svg_url}
						title={tool.name}
						height={30}
						width={30}
						alt={`${tool.name}: svg from developer tools`}
					/>
				);
			})}
		</div>
	);
}
