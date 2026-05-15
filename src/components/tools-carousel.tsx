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
			style={{ width: 'calc(100dvw * 2)' }}
			className={twMerge(
				'min-w-max flex gap-4 justify-between items-center',
				className,
			)}>
			{[...toolsWithoutCategory, ...toolsWithoutCategory].map((tool) => {
				return (
					<Image
						key={tool._id}
						className='tracking-normal h-6'
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
