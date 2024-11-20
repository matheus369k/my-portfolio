'use client';

import { slideProjectsContext } from '@/contexts/slide-projects';
import { useEffect, useContext } from 'react';
import Glide from '@glidejs/glide';

export function useSlide() {
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

	return {
		state,
	};
}
