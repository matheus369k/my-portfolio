'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSlide } from '../hooks/use-slide';

export function ControlSlideProject({ total }: { total: number }) {
	const { state } = useSlide();
	const currentSlide = state.currentSlide + 1;
	const isFirstSlide = state.currentSlide > 0;
	const isLastSlide = state.currentSlide < total - 1;

	return (
		<div
			data-testid='controlSlideProject'
			data-glide-el='controls'
			className='glide__arrows relative flex items-center justify-center gap-0.5'>
			<ArrowLeft
				data-glide-dir='<'
				className={`w-8 h-6 glide__arrow glide__arrow--left ${isFirstSlide ? 'text-blue-600 cursor-pointer' : 'text-zinc-700'}`}
			/>
			<span className='text-xl font-medium text-blue-600'>
				{currentSlide} de {total}
			</span>
			<ArrowRight
				data-glide-dir='>'
				className={`w-8 h-6 glide__arrow glide__arrow--right ${isLastSlide ? 'text-blue-600 cursor-pointer' : 'text-zinc-700'}`}
			/>
		</div>
	);
}
