import { Title } from '@/components/ui/title';
import type { ProjectType } from '@/@types';
import Image from 'next/image';
import { ProjectLinksModal } from './project-links-modal';
import { ProjectViews } from './project-views';
import { Button } from './ui/button';
import { BaseLink } from './ui/base-link';
import * as Motion from 'motion/react-client';

interface ProjectItemProps {
	project: ProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<div
			data-slug={project.slug}
			className='cursor-default flex flex-col justify-between gap-y-6 border-b border-zinc-700 py-12 first-of-type:pt-8 last-of-type:border-none md:gap-y-12'>
			<div className='flex flex-col gap-6 items-center justify-between sm:flex-row'>
				<Title className='relative self-start max-w-full truncate'>
					{project.name}
				</Title>
				<div className='flex gap-y-8 gap-x-4 w-full sm:w-auto font-bold'>
					<BaseLink href={project.links[0].link}>
						<Button size='full' className='sm:w-auto'>
							{project.links[0].name}
						</Button>
					</BaseLink>

					<ProjectLinksModal name={project.name} links={project.links} />
				</div>
			</div>

			<div className='flex flex-col-reverse mx-auto lg:mx-0 xl:mx-auto gap-y-6 xl:flex-row'>
				<div className='max-w-5xl flex flex-col gap-8 flex-1'>
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

				<div className='relative aspect-video w-full h-full max-w-2xl mx-auto xl:mx-0'>
					<Image
						width={672}
						height={350}
						src={project.image_url}
						className='rounded-lg border border-zinc-700/20 object-cover w-full h-full'
						loading='lazy'
						alt={project.description}
					/>

					<ProjectViews accessTotal={project.access_total} />
				</div>
			</div>
		</div>
	);
}
