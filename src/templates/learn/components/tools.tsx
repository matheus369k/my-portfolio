import { LearnTool } from './tool';
import { getTools } from '@/services/get-tools';
import { Title } from '@/components/title';

export async function LearnTools() {
	const { tools } = await getTools();

	return (
		<section className='flex flex-col gap-8'>
			<Title>Ferramentas</Title>

			<div className='flex justify-center items-center flex-wrap w-full gap-4 md:gap-8'>
				{tools.map((tool) => {
					return <LearnTool key={tool._id} {...tool} />;
				})}
			</div>
		</section>
	);
}
