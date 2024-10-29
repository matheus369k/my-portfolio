import { LearnTool } from './learn-tool';
import { getTools } from '@/services/get-tools';

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
