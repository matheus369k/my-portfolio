import { Title } from '@/components/title';
import type { Tools } from '@/@types';
import Image from 'next/image';

enum ToolsCategory {
	front_end = 'Front End',
	back_end = 'Back End',
	another = 'Outros',
}

type CategoryTypes = 'front_end' | 'back_end' | 'another';

export function ToolsSection({ tools }: Tools) {
	return (
		<section className='flex flex-col gap-8'>
			<Title>Ferramentas</Title>

			{Object.entries(tools).map((tool) => {
				const toolCategory = ToolsCategory[tool[0] as CategoryTypes];
				return (
					<div className='flex flex-col gap-4' key={tool[0]}>
						<h3 className='font-bold text-xl'>{toolCategory}</h3>
						<div className='flex items-center flex-wrap w-full gap-2'>
							{tool[1].map((tool) => {
								return (
									<div
										key={tool._id}
										className='bg-gradient-to-t from-zinc-700/20 to-zinc-900/20 rounded-full p-4 flex justify-center items-center border-b border-blue-600 group'>
										<Image
											width={32}
											height={32}
											src={tool.svg_url}
											alt={`${tool.name}: Uma ferramenta usada no mundo da programação`}
											className='group-hover:scale-95 transition-transform duration-400 size-8'
										/>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</section>
	);
}
