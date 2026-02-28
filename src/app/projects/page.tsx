import { ProjectItem } from '@/components/project-item';
import { Suspense } from 'react';
import {div as MotionDiv} from 'motion/react-client';
import { getProjects } from '@/services/get-projects';

export default async function ProjectsPage() {
	const { projects } = await getProjects();

	return (
			<MotionDiv initial={{opacity:0}} animate={{opacity: 1}} className='max-w-full'>
				<div
					className='flex flex-col justify-center gap-y-6'>
					<Suspense>
							<ul className='flex flex-col'>
								{projects.map((project, index) => {
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
			</MotionDiv>)
}
