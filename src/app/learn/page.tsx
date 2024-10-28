import { env } from '@/env';
import { ArrowDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Tools {
	tools: {
		_id: string;
		name: string;
		svg_url: string;
	}[];
}

interface Certificates {
	certificates: {
		title: string;
		validation_code: string;
		image_url: string;
		verification_url: string;
	}[];
}

async function getTools() {
	const response = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/tools`);
	const data: Tools = await response.json();

	return {
		...data,
	};
}

async function getCertificates() {
	const response = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/certificates/3`);
	const data: Certificates = await response.json();

	return {
		...data,
	};
}
export default async function Learn() {
	const { tools } = await getTools();
	const { certificates } = await getCertificates();

	return (
		<div className='min-h-dvh flex flex-col gap-8'>
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

			<section className='flex flex-col gap-8'>
				<h1 className='text-3xl font-bold leading-relaxed pl-8 border-l-4 border-blue-600 rounded-lg'>
					Certificados
				</h1>

				<div className='relative flex flex-col gap-8 leading-relaxed  max-h-[575px] overflow-hidden'>
					{certificates.map((certificate) => {
						return (
							<div
								key={certificate.validation_code}
								className='flex items-center gap-4'>
								<Image
									className='rounded-lg'
									src={certificate.image_url}
									width={300}
									height={200}
									alt=''
								/>
								<div className='flex flex-col'>
									<h2 className='text-2xl font-semibold'>
										{certificate.title}
									</h2>
									<p>
										<span className='font-semibold'>Código: </span>
										<span className='text-zinc-400'>
											{certificate.validation_code}
										</span>
									</p>
									<p>
										<span className='font-semibold'>Verifique em: </span>
										<Link
											className='text-zinc-400 underline'
											href={certificate.verification_url}
											target='_blank'>
											{certificate.verification_url}
										</Link>
									</p>
								</div>
							</div>
						);
					})}

					<div className='absolute bottom-0 bg-gradient-to-t from-zinc-900 to-zinc-900/40 w-full h-28 flex justify-center items-center'>
						<button type='button' title='Mostrar mais'>
							<ArrowDownIcon className='size-12 text-blue-600' />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
