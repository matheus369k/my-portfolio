import { LearnTool } from './learn-tool';
import { getTools } from '@/services/get-tools';
import { Title } from './title';

export async function LearnTools() {
	const { tools } = await getTools();

	return (
		<section className='flex flex-col gap-8'>
			<Title>Ferramentas</Title>

			<div className='flex justify-center items-center flex-wrap gap-8 w-full'>
				{tools.map((tool) => {
					return <LearnTool key={tool._id} {...tool} />;
				})}
			</div>
		</section>
	);
}
