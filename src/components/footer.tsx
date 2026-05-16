import { getTools } from '@/services/get-tools';
import { ToolsCarousel } from './tools-carousel';

export async function Footer() {
	const { tools } = await getTools();
	return (
		<footer className='flex items-center overflow-hidden relative h-10 border-t border-zinc-700 z-10 bg-zinc-900'>
			<div className='flex justify-between gap-4 w-max absolute h-min animation-tools-carousel px-4'>
				<ToolsCarousel tools={tools} />
			</div>
		</footer>
	);
}
