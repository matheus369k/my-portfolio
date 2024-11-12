import { ControlSlideProject } from '@/components/control-slide-projects';
import { Project } from '@/components/project';
import { SlideProjectsContextProvider } from '@/contexts/slide-projects';
import { getProjects } from '@/services/get-projects';
import { Suspense } from 'react';

export default async function ProjectsPage() {
	const { projects } = await getProjects();
	const total = projects.length;

	return (
		<div className='glide max-w-full'>
			<div
				className='glide__track flex flex-col justify-center'
				data-glide-el='track'>
				<Suspense fallback={<p>loading...</p>}>
					<SlideProjectsContextProvider>
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

						<ControlSlideProject total={total} />
					</SlideProjectsContextProvider>
				</Suspense>
			</div>
		</div>
	);
}
