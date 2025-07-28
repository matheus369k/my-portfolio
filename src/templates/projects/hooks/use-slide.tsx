'use client';

import { slideProjectsContext } from '../contexts/slide-projects';
import { useEffect, useContext } from 'react';
import 'node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import 'node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import Glide from '@glidejs/glide';

export function useSlide() {
	const { state, handleSetCurrentSlide } = useContext(slideProjectsContext);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const glide = new Glide('.glide', {
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

		document.addEventListener('keydown', disableSlideWithKeyPress);

		glide.on('move.after', () => {
			handleSetCurrentSlide({ currentSlide: glide.index });
			setQueryParams({ index: glide.index });
		});

		function disableSlideWithKeyPress({ code }: KeyboardEvent) {
			const allProjects = document.querySelectorAll('[data-slug]');
			const index = glide.index;
			if (code === 'ArrowLeft' && index === 0) {
				return glide.disable();
			}
			if (code === 'ArrowRight' && index === allProjects.length - 1) {
				return glide.disable();
			}
			glide.enable();
		}

		return () => {
			document.removeEventListener('keydown', disableSlideWithKeyPress);
			glide.destroy();
		};
	}, [state.initialSlide]);

	function setQueryParams({ index }: { index: number }) {
		const url = new URL(window.location.toString());
		url.searchParams.set('index', index.toString());
		window.history.pushState({}, '', url.toString());
	}

	return {
		state,
	};
}
