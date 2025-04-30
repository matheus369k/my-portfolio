import { Title } from '@/components/title';
import { ProjectLinkContent, ProjectLinkRoot } from './project-link';
import type { ProjectType } from '@/@types';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Image from 'next/image';

interface ProjectItemProps {
	project: ProjectType;
	index: number;
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<li
			data-slug={project.slug}
			className='glide__slide cursor-default flex flex-col gap-y-8 opacity-0 transition-opacity data-[visible]:opacity-100'>
			<div className='col-span-full flex items-center justify-between'>
				<Title className='relative max-w-[calc(100%-140px)] truncate'>
					{project.name}
				</Title>
			</div>

			<div className='flex flex-col-reverse w-auto mx-auto lg:justify-between lg:flex-row'>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Descrição</h3>
						<p className='px-4 max-w-xl text-base'>{project.description}</p>
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
							<ProjectLinkRoot href={project.links.deploy}>
								<ProjectLinkContent>Site</ProjectLinkContent>
							</ProjectLinkRoot>
							<ProjectLinkRoot href={project.links.repository}>
								<ProjectLinkContent>Repositório</ProjectLinkContent>
							</ProjectLinkRoot>
						</div>
					</div>
				</div>

				<div className='relative col-span-full row-start-2 row-end-3 aspect-video h-full lg:place-self-center'>
					<Image
						width={619}
						height={350}
						src={project.image_url}
						className='rounded-lg border border-zinc-700/20 transition-opacity object-cover h-full w-full'
						loading='lazy'
						fetchPriority='high'
						alt=''
					/>
				</div>
			</div>
		</li>
	);
}
