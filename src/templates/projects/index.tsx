import { ProjectItem } from './components/project-item';
import { Suspense } from 'react';
import type { Projects as ProjectsType } from '@/@types';

export function Projects({ projects }: ProjectsType) {
	const total = projects.length;

	return (
		<div className='max-w-full'>
			<div
				className='flex flex-col justify-center gap-y-6'>
				<Suspense>
						<ul className='flex flex-col'>
							{projects?.map((project, index) => {
								return (
									<ProjectItem
										index={index}
										project={project}
										key={project._id}
									/>
								);
							})}
						</ul>
				</Suspense>
			</div>
		</div>
	);
}
