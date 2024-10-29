import { env } from '@/env';
import Image from 'next/image';

interface Tools {
	tools: {
		_id: string;
		name: string;
		svg_url: string;
	}[];
}

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
					return (
						<div
							key={tool._id}
							title={tool.name}
							className='bg-gradient-to-t from-zinc-700/20 to-zinc-900/20 rounded-full p-4 flex justify-center items-center border-b border-blue-600'>
							<Image
								src={tool.svg_url}
								alt={`${tool.name}: E uma ferramenta usada no mundo da programação`}
								width={100}
								height={100}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
}
