import { Projects } from '@/templates/projects';
import { getProjects } from '@/templates/projects/services/get-projects';

export default async function ProjectsPage() {
	const { projects } = await getProjects();
	
	return <Projects projects={projects} />;
}
