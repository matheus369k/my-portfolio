import { Projects } from '@/templates/projects/index';
import { getProjects } from '@/templates/projects/services/get-projects';

export default async function ProjectsPage() {
	const { projects } = await getProjects();
	return <Projects projects={projects ?? []} />;
}
