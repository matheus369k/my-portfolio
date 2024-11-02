import type { Projects } from '@/_types';
import { Project } from '@/components/project';
import { env } from '@/env';

async function getProjects() {
	const res = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/projects`);
	const data: Projects = await res.json();

	return {
		...data,
	};
}

export default async function ProjectsPage() {
	const { projects } = await getProjects();
	const total = projects.length;

	return (
		<div className='glide max-w-full'>
			<div className='glide__track' data-glide-el='track'>
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
			</div>
		</div>
	);
}
