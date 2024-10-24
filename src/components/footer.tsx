'use client';

import { useQuery } from '@tanstack/react-query';
import { getTools } from '@/server/get-tools';
import type { Tools } from '@/_types';
import { ToolsCarousel } from './tools-carousel';
import { createId } from '@paralleldrive/cuid2';
import svgUrl from '@/assets/images/react.svg';

const fakerDatas: Tools = {
	tools: [
		...Array.from({ length: 18 }).map(() => {
			return {
				_id: createId(),
				name: 'loading...',
				svg_url: svgUrl,
			};
		}),
	],
};

export function Footer() {
	const { data, isPending, isError } = useQuery({
		queryKey: ['footer'],
		queryFn: async () => await getTools(),
	});

	const { tools } = isPending || isError ? fakerDatas : data;

	return (
		<footer className='overflow-hidden relative h-10 border-t border-zinc-700'>
			<div className='flex justify-between items-center w-max absolute h-full animation-tools-carousel'>
				<ToolsCarousel tools={tools} />
				<ToolsCarousel tools={tools} />
			</div>
		</footer>
	);
}
