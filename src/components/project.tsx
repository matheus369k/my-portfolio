'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Title } from './title';
import { ProjectLinks } from './project-links';
import { ProjectPreview } from './project-preview';
import type { ProjectType } from '@/_types';
import Glide from '@glidejs/glide';
import { useEffect, useState } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';

interface ProjectProps {
	project: ProjectType;
	index: number;
	total: number;
}

export function Project({ index, project, total }: ProjectProps) {
	useEffect(() => {
		ObserverContainer();
	}, []);

	function setQueryParams({ slug }: { slug: string }) {
		const url = new URL(window.location.toString());
		url.searchParams.set('slug', slug);
		window.history.pushState({}, '', url.toString());
	}

	function callbackObserver(entries: IntersectionObserverEntry[]) {
		const isVisible = entries[0].isIntersecting;

		if (!isVisible) return;

		const { slug } = project;
		setQueryParams({ slug });
	}

	function ObserverContainer() {
		const projectElement = document.querySelector(
			`[data-slug='${project.slug}']`,
		);

		if (!projectElement) return;

		const optionObserver = { threshold: 0.9 };
		const observerInstance = new IntersectionObserver(
			callbackObserver,
			optionObserver,
		);

		observerInstance.observe(projectElement);
	}

	return (
		<li
			data-slug={project.slug}
			className='glide__slide cursor-default flex flex-col gap-y-8'>
			<div className='col-span-full flex items-center justify-between'>
				<Title>{project.name}</Title>
				<div
					data-glide-el='controls'
					className='glide__arrows relative flex items-center gap-0.5'>
					<ArrowLeft
						data-glide-dir='<'
						className={`glide__arrow glide__arrow--left w-8 h-6 ${index === 0 ? 'text-zinc-700' : 'text-blue-600 cursor-pointer'}`}
					/>
					<span className='text-xl font-medium text-blue-600'>
						{index + 1} de {total}
					</span>
					<ArrowRight
						data-glide-dir='>'
						className={`lide__arrow glide__arrow--right w-8 h-6 ${index === total - 1 ? 'text-zinc-700' : 'text-blue-600 cursor-pointer'}`}
					/>
				</div>
			</div>

			<div className='flex justify-between'>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Descrição</h3>
						<p className='px-4 font-medium max-w-xl'>{project.description}</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Ferramentas</h3>
						<div className='flex flex-wrap gap-2.5 px-4 max-w-xl'>
							{project.tools.map((technology) => {
								return (
									<p
										className='px-3 py-2 border border-blue-600 rounded-lg font-medium'
										key={technology}>
										{technology}
									</p>
								);
							})}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Links</h3>
						<div className='px-4 flex gap-8 font-bold'>
							<ProjectLinks href={project.links.deploy}>Site</ProjectLinks>
							<ProjectLinks href={project.links.repository}>
								Repositório
							</ProjectLinks>
						</div>
					</div>
				</div>

				<ProjectPreview {...project.images_url} />
			</div>
		</li>
	);
}
