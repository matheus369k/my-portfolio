'use client';

import type { Projects as ProjectsTypes } from '@/_types';
import { Project } from './project';
import { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';

export function Projects({ projects }: ProjectsTypes) {
	const [initialSlide, setInitialSlide] = useState(0);
	const total = projects.length;

	useEffect(() => {
		if (initialSlide === 0) {
			setNewInitialSlide();
		}

		new Glide('.glide', {
			type: 'slider',
			startAt: initialSlide,
			waitForTransition: false,
			gap: 32,
			perView: 1,
			animationDuration: 0,
			rewind: false,
			dragThreshold: false,
		}).mount();
	}, [initialSlide]);

	function setNewInitialSlide() {
		const { slug } = getQueryParams();

		if (!slug) return;

		projects.forEach((project, index) => {
			if (project.slug === slug) {
				setInitialSlide(index);
			}
		});
	}

	function getQueryParams() {
		const url = new URL(window.location.toString());
		const slug = url.searchParams.get('slug');

		return {
			slug,
		};
	}

	return (
		<ul className='glide__slides flex'>
			{projects.map((project, index) => {
				return (
					<Project
						total={total}
						index={index}
						project={project}
						key={project._id}
					/>
				);
			})}
		</ul>
	);
}
