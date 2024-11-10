import { Project } from '@/components/project';
import { Projects } from '@/components/projects';
import { getProjects } from '@/services/get-projects';

export default async function ProjectsPage() {
	const { projects } = await getProjects();

	return (
		<div className='glide max-w-full'>
			<div className='glide__track' data-glide-el='track'>
				<Projects projects={projects} />
			</div>
		</div>
	);
}
