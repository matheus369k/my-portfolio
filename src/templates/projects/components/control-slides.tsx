'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSlide } from '../hooks/use-slide';

export function ControlSlideProject({ total }: { total: number }) {
	const { state } = useSlide();
	const currentSlide = state.currentSlide + 1;
	const isFirstSlide = state.currentSlide === 0;
	const isLastSlide = state.currentSlide === total - 1;

	return (
		<div
			data-glide-el='controls'
			className='glide__arrows flex items-center justify-center gap-6 relative w-auto h-full'>
			<button
				disabled={isFirstSlide}
				aria-label='Previous'
				type='button'
				data-glide-dir='<'
				className='glide__arrow glide__arrow--left text-blue-600 disabled:text-zinc-700'>
				<ArrowLeft />
			</button>
			<span className='text-xl font-medium text-blue-600'>
				{currentSlide} de {total}
			</span>
			<button
				disabled={isLastSlide}
				aria-label='Next'
				type='button'
				data-glide-dir='>'
				className='glide__arrow glide__arrow--right text-blue-600 disabled:text-zinc-700'>
				<ArrowRight />
			</button>
		</div>
	);
}
