import { Title } from '@/components/title';
import { env } from '@/env';
import { ArrowLeft, ArrowRight, ImageIcon, ImagePlay } from 'lucide-react';
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
		<div className='w-max flex gap-8 overflow-hidden'>
			{projects.map((project, index) => {
				return (
					<div
						className='w-fit grid grid-cols-2 grid-rows-[auto,_1fr] gap-y-12'
						key={project._id}>
						<div className='col-span-full flex items-center justify-between'>
							<Title>{project.name}</Title>
							<div className='flex items-center gap-0.5'>
								<ArrowLeft className='w-8 h-6' />
								<span className='text-xl font-medium text-blue-600'>
									{index + 1} de {projects.length}
								</span>
								<ArrowRight className='w-8 h-6 text-blue-600' />
							</div>
						</div>

						<div className='flex flex-col gap-8'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bold text-xl'>Descrição</h3>
								<p className='px-4 font-medium max-w-xl'>
									{project.description}
								</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bold text-xl'>Ferramentas</h3>
								<div className='flex flex-wrap gap-2.5 px-4'>
									{project.tools.map((technology) => {
										return (
											<p
												className='px-3 py-2 border border-blue-600 rounded-lg font-medium'
												key={technology}>
												{technology}
											</p>
										);
									})}
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bold text-xl'>Links</h3>
								<div className='px-4 flex gap-8 font-bold'>
									<Link
										className='rounded-lg overflow-hidden'
										target='_blank'
										href={project.links.deploy}>
										<button type='button' className='px-8 py-2 bg-blue-600'>
											Site
										</button>
									</Link>
									<Link
										className='rounded-lg overflow-hidden'
										target='_blank'
										href={project.links.repository}>
										<button type='button' className='px-8 py-2 bg-blue-600'>
											Repositório
										</button>
									</Link>
								</div>
							</div>
						</div>

						<div className='flex flex-col'>
							<div className='flex justify-end font-bold capitalize'>
								<button
									type='button'
									className='flex items-center gap-2 w-fit row-start-1 px-4 py-2 text-zinc-700 border border-zinc-700/20 border-r-0 border-b-0 rounded-lg rounded-b-none rounded-tr-none'>
									<ImageIcon className='size-4' />
									<span>Imagem</span>
								</button>
								<button
									type='button'
									className='flex items-center gap-2 w-fit row-start-1 px-4 py-2 border border-zinc-700/20 border-b-0 rounded-lg rounded-b-none rounded-tl-none'>
									<ImagePlay className='size-4' />
									<span>Gif</span>
								</button>
							</div>
							<Image
								className='col-span-full row-start-2 rounded-lg rounded-tr-none border border-zinc-700/20'
								src={project.images_url.png}
								width={619}
								height={350}
								alt={`png-${project.name}`}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
