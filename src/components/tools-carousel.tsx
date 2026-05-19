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

	function RenderToolImageUI({ step }: { step: number }) {
		return toolsWithoutCategory.map((tool) => {
			return (
				<Image
					height={24}
					width={24}
					title={tool.name}
					src={tool.svg_url}
					key={`${tool._id}-step=${step}`}
					className='tracking-normal h-6 w-auto'
					alt={`${tool.name}: svg from developer tools`}
					fetchPriority='low'
				/>
			);
		});
	}

	return (
		<div
			{...props}
			style={{ width: 'calc(100dvw * 2)' }}
			className={twMerge(
				'min-w-max flex gap-4 justify-between items-center',
				className,
			)}>
			{RenderToolImageUI({ step: 1 })}
			{RenderToolImageUI({ step: 2 })}
		</div>
	);
}
