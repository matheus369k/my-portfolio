import { ToolCard } from './tool-card';
import { Title } from '@/components/title';
import type { Tools } from '@/@types';

export function LearnTools({ tools }: Tools) {
	return (
		<section className='flex flex-col gap-8'>
			<Title>Ferramentas</Title>

			<div className='flex justify-center items-center flex-wrap w-full gap-4 md:gap-8'>
				{tools.map((tool) => {
					return <ToolCard key={tool._id} {...tool} />;
				})}
			</div>
		</section>
	);
}
