import { env } from '@/env';
import Image from 'next/image';
import { LearnTool } from './learn-tool';
import type { Tools } from '@/_types';

async function getTools() {
	const response = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/tools`);
	const data: Tools = await response.json();

	return {
		...data,
	};
}

export async function LearnTools() {
	const { tools } = await getTools();

	return (
		<section className='flex flex-col gap-8'>
			<h1 className='text-3xl font-bold leading-relaxed pl-8 border-l-4 border-blue-600 rounded-lg'>
				Ferramentas
			</h1>

			<div className='flex justify-center items-center flex-wrap gap-8 w-full'>
				{tools.map((tool) => {
					return <LearnTool key={tool._id} {...tool} />
				})}
			</div>
		</section>
	);
}
