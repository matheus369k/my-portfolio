'use client';

import Image from 'next/image';
import type { Tool } from '@/@types';

export function LearnTool({ name, svg_url }: Tool) {
	return (
		<div className='bg-gradient-to-t from-zinc-700/20 to-zinc-900/20 rounded-full p-4 flex justify-center items-center border-b border-blue-600 group'>
			<Image
				width={100}
				height={100}
				src={svg_url}
				alt={`${name}: Uma ferramenta usada no mundo da programação`}
				className='group-hover:scale-95 transition-transform duration-400 size-12 md:size-[100px]'
			/>
		</div>
	);
}
