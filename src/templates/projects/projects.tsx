import { SlideProjectsContextProvider } from '@/contexts/slide-projects';
import { Suspense } from 'react';
import { Project } from './components/project';
import { ControlSlideProject } from './components/control-slides';
import type { Projects as ProjectsType } from '@/@types';

export function Projects({ projects }: ProjectsType) {
	const total = projects.length;

	return (
		<div data-testid='ProjectsRoot' className='glide max-w-full'>
			<div
				className='glide__track flex flex-col justify-center gap-y-4 lg:gap-y-0'
				data-glide-el='track'
				data-testid='ProjectsContainer'>
				<Suspense>
					<SlideProjectsContextProvider>
						<ul className='glide__slides grid'>
							{projects.map((project, index) => {
								return (
									<Project index={index} project={project} key={project._id} />
								);
							})}
						</ul>

						<ControlSlideProject total={total} />
					</SlideProjectsContextProvider>
				</Suspense>
			</div>
		</div>
	);
}
