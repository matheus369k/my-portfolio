import { ProjectItem } from '@/components/project-items/project-item';
import { getProjects } from '@/services/get-projects';

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
				<div className='flex flex-col'>
					{projects.map((project, index) => {
						const isFetchPriority = index < 2;

						return (
							<ProjectItem
								key={project._id}
								project={project}
								isFetchPriority={isFetchPriority}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
