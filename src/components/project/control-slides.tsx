'use client';

import { slideProjectsContext } from '@/contexts/slide-projects';
import Glide from '@glidejs/glide';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useContext } from 'react';

export function ControlSlideProject({ total }: { total: number }) {
	const { state } = useContext(slideProjectsContext);

	useEffect(() => {
		new Glide('.glide', {
			type: 'slider',
			animationTimingFunc: 'linear',
			startAt: state.initialSlide,
			waitForTransition: true,
			gap: 16,
			perView: 1,
			animationDuration: 700,
			rewind: false,
			dragThreshold: false,
		}).mount();
	}, [state.initialSlide]);

	return (
		<div
			data-glide-el='controls'
			className='glide__arrows relative flex items-center justify-center gap-0.5'>
			<ArrowLeft
				data-glide-dir='<'
				className={`w-8 h-6 glide__arrow glide__arrow--left ${state.currentSlide > 0 ? 'text-blue-600 cursor-pointer' : 'text-zinc-700'}`}
			/>
			<span className='text-xl font-medium text-blue-600'>
				{state.currentSlide + 1} de {total}
			</span>
			<ArrowRight
				data-glide-dir='>'
				className={`w-8 h-6 glide__arrow glide__arrow--right ${state.currentSlide < (total - 1) ? 'text-blue-600 cursor-pointer' : 'text-zinc-700'}`}
			/>
		</div>
	);
}
