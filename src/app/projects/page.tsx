import { ControlSlideProject } from '@/components/project/control-slides';
import { Project } from '@/components/project/project';
import { SlideProjectsContextProvider } from '@/contexts/slide-projects';
import { getProjects } from '@/services/get-projects';
import { Suspense } from 'react';

export default async function ProjectsPage() {
	const { projects } = await getProjects();
	const total = projects.length;

	return (
		<div className='glide max-w-full'>
			<div
				className='glide__track flex flex-col justify-center gap-y-4 lg:gap-y-0'
				data-glide-el='track'>
				<Suspense>
					<SlideProjectsContextProvider>
						<ul className='glide__slides grid'>
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

						<ControlSlideProject total={total} />
					</SlideProjectsContextProvider>
				</Suspense>
			</div>
		</div>
	);
}
