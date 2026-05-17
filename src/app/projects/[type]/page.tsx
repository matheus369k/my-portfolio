import { ProjectItem } from '@/components/project-item';
import { Suspense } from 'react';
import { div as MotionDiv } from 'motion/react-client';
import { getProjects } from '@/services/get-projects';
import { ProjectItemLoading } from '@/components/project-item-loading';

type ProjectsPageProps = {
	params: { type: 'all' | 'full-stack' | 'landing-page' };
	searchParams: object;
};

export const revalidate = 1000 * 60 * 60;

export default async function ProjectsPage({ params }: ProjectsPageProps) {
	const { projects } = await getProjects(params.type);

	return (
		<div className='max-w-full'>
			<div className='flex flex-col justify-center gap-y-6'>
				<Suspense>
					<div className='flex flex-col'>
						{projects.map((project) => {
							return <ProjectItem key={project._id} project={project} />;
						})}
					</div>
				</Suspense>
			</div>
		</div>
	);
}
