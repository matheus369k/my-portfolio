import { getTools } from '@/services/get-tools';
import Image from 'next/image';

export async function ToolsCarousel() {
	const { tools } = await getTools();

	return (
		<div className='w-screen flex px-4 justify-between items-center'>
			{tools.map((tool) => {
				return (
					<Image
						key={tool._id}
						className='tracking-normal'
						src={tool.svg_url}
						title={tool.name}
						height={30}
						width={30}
						alt=''
					/>
				);
			})}
		</div>
	);
}
