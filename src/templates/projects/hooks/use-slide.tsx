'use client';

import { slideProjectsContext } from '@/contexts/slide-projects';
import { useEffect, useContext } from 'react';
import Glide from '@glidejs/glide';

export function useSlide() {
	const { state, handleSetCurrentSlide } = useContext(slideProjectsContext);

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

		document.addEventListener('keydown', disableSlide);
		glide
			.on('move', () => hiddenSlide())
			.on('move.after', () => showedSlide(glide.index));

		function disableSlide({ code }: KeyboardEvent) {
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
			document.removeEventListener('keydown', disableSlide);
			glide.destroy();
		};
	}, [state.initialSlide]);

	function setQueryParams({ index }: { index: number }) {
		const url = new URL(window.location.toString());
		url.searchParams.set('index', index.toString());
		window.history.pushState({}, '', url.toString());
	}

	function showedSlide(index: number) {
		const allProjects = document.querySelectorAll('[data-slug]');
		const visibleProject = allProjects[index];
		visibleProject.setAttribute('data-visible', 'true');
		handleSetCurrentSlide({ currentSlide: index });
		setQueryParams({ index: index });
	}

	function hiddenSlide() {
		const visibleProject = document.querySelector('[data-visible]');
		visibleProject?.removeAttribute('data-visible');
	}

	return {
		state,
	};
}
