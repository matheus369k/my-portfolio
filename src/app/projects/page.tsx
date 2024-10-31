import { Title } from '@/components/title';
import { env } from '@/env';
import Image from 'next/image';
import Link from 'next/link';

interface Projects {
	projects: {
		_id: string;
		name: string;
		slug: string;
		tools: [string];
		images_url: {
			png: string;
			gif: string;
		};
		links: {
			deploy: string;
			repository: string;
		};
		description: string;
	}[];
}

async function getProjects() {
	const res = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/projects`);
	const data: Projects = await res.json();

	return {
		...data,
	};
}

export default async function Projects() {
	const { projects } = await getProjects();

	return (
		<div className='max-h-dvh overflow-hidden'>
			{projects.map((project) => {
				return (
					<div className='h-dvh grid grid-cols-2' key={project._id}>
						<Title className='col-span-full'>{project.name}</Title>

						<div>
							<div>
								<p>Descrição: </p>
								<p>{project.description}</p>
							</div>
							<div>
								<p>Ferramentas: </p>
								{project.tools.map((technology) => {
									return <p key={technology}>{technology}</p>;
								})}
							</div>
							<div>
								<p>Links</p>
								<div>
									<Link target='_blank' href={project.links.deploy}>
										Site
									</Link>
									<Link target='_blank' href={project.links.repository}>
										Repositório
									</Link>
								</div>
							</div>
						</div>
						<Image
							src={project.images_url.png}
							width={619}
							height={350}
							alt={`png-${project.name}`}
						/>
					</div>
				);
			})}
		</div>
	);
}
