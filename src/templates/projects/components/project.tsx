'use client';

import { Title } from '@/components/title';
import { ProjectLink } from './link';
import { ProjectPreview } from './preview';
import type { ProjectType } from '@/@types';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { useVisibleSlide } from '../hooks/use-visible-slide';

interface ProjectProps {
	project: ProjectType;
	index: number;
}

export function Project({ index, project }: ProjectProps) {
	useVisibleSlide({index, slug: project.slug})
 
	return (
		<li
			data-slug={project.slug}
			className={
				'glide__slide cursor-default flex flex-col gap-y-8 transition-opacity duration-700'
			}>
			<div className='col-span-full flex items-center justify-between'>
				<Title>{project.name}</Title>
			</div>

			<div className='flex flex-col-reverse w-auto mx-auto lg:justify-between lg:flex-row'>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Descrição</h3>
						<p className='px-4 max-w-xl'>{project.description}</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Ferramentas</h3>
						<div className='flex flex-wrap gap-2.5 px-4 max-w-xl'>
							{project.tools.map((technology) => {
								return (
									<p
										className='px-3 py-2 border border-blue-600 rounded-lg'
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
							<ProjectLink href={project.links.deploy}>Site</ProjectLink>
							<ProjectLink href={project.links.repository}>
								Repositório
							</ProjectLink>
						</div>
					</div>
				</div>

				<ProjectPreview {...project.images_url} />
			</div>
		</li>
	);
}
