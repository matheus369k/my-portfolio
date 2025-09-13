import { Title } from '@/components/title';
import { ProjectLinkRoot } from './project-link';
import type { ProjectType } from '@/@types';
import Image from 'next/image';
import { Button } from '@/components/button';
import {ul as MotionList} from 'motion/react-client'

interface ProjectItemProps {
	project: ProjectType;
	index: number;
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<MotionList 
		  animate={{ animationDuration: 750 }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
			data-slug={project.slug}
			className='cursor-default flex flex-col justify-between gap-y-6 border-b border-zinc-700 py-12 first-of-type:pt-8 last-of-type:border-none md:gap-y-12'>
			<div className='col-span-full flex flex-col gap-6 items-center justify-between sm:flex-row'>
				<Title className='relative self-start max-w-full truncate'>
					{project.name}
				</Title>
				<div className='flex gap-y-8 gap-x-4 w-full sm:w-auto font-bold'>
					<ProjectLinkRoot href={project.links.deploy}>
						<Button size='full' className='sm:w-auto'>
							Site
						</Button>
					</ProjectLinkRoot>
					<ProjectLinkRoot href={project.links.repository}>
						<Button size='full' className='sm:w-auto'>
							Repositório
						</Button>
					</ProjectLinkRoot>
				</div>
			</div>

			<div className='grid grid-cols-1 [grid-template-rows: repeat(2, auto);] grid-rows w-auto mx-auto gap-y-6 lg:grid-rows-1 lg:grid-cols-2'>
				<div className='flex flex-col gap-8 col-auto rom-start-2 lg:row-start-1'>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Descrição</h3>
						<p className='px-4 text-base'>{project.description}</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold text-xl'>Ferramentas</h3>
						<div className='flex flex-wrap gap-2.5 px-4'>
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
				</div>

				<div className='col-start-1 lg:col-start-2 row-start-1 relative aspect-video w-full'>
					<Image
						width={619}
						height={350}
						src={project.image_url}
						className='rounded-lg border border-zinc-700/20 transition-opacity object-cover h-full w-full'
						loading='lazy'
						fetchPriority='high'
						alt={project.description}
					/>
				</div>
			</div>
		</MotionList>
	);
}
