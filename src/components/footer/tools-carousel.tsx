'use client';

import type { Tool } from '@/@types';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ToolsCarouselProps = ComponentProps<'div'> & {
	tools: Tool[];
};

export function ToolsCarousel({
	tools,
	className,
	...props
}: ToolsCarouselProps) {
	return (
		<div
			{...props}
			className={twMerge(
				'w-screen flex justify-between items-center',
				className,
			)}>
			{/*tools.map((tool) => {
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
			})*/}
		</div>
	);
}
