import { ToolsCarousel } from './tools-carousel';

export function Footer() {
	return (
		<footer className='flex items-center overflow-hidden relative h-10 border-t border-zinc-700'>
			<div className='flex justify-between gap-2 w-max absolute h-min animation-tools-carousel'>
				<ToolsCarousel />
				<ToolsCarousel />
			</div>
		</footer>
	);
}
