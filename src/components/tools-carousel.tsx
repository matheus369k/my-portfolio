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
