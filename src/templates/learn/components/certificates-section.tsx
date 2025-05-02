import type { Certificates } from '@/@types';
import { Title } from '@/components/title';
import { FormatterDate } from '@/util/formatter-date';
import Link from 'next/link';

export function CertificatesSection({ certificates }: Certificates) {
	return (
		<section className='flex flex-col gap-8'>
			<Title>Certificados</Title>

			<div className='relative flex flex-col leading-relaxed gap-y-8 pl-10 md:pl-14 border-spacing-0.5 border-blue-600 border-l before:w-3.5 before:h-3.5 before:bg-blue-600 before:absolute before:top-0 before:-left-[0.4375rem] before:rounded-full after:w-3.5 after:h-3.5 after:bg-blue-600 after:absolute after:-left-[0.4375rem] after:bottom-0 after:rounded-full'>
				{certificates.map((certificate) => {
					return (
						<div
							key={certificate.emission_data}
							className='relative flex flex-col gap-4 p-3 border-spacing-0.5 border-blue-600 border rounded-lg before:h-0.5 before:w-10 md:before:w-14 before:bg-blue-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[2.525rem] md:before:-left-[3.525rem]'>
							<div className='flex justify-between'>
								<h2 className='text-2xl font-semibold truncate'>
									{certificate.title}
								</h2>
								<span className='text-zinc-400 font-bold'>
									{FormatterDate(new Date(certificate.emission_data))}
								</span>
							</div>

							<p className='font-bold'>{certificate.description}</p>

							<p className='flex gap-2'>
								<span className='font-semibold text-nowrap'>Verifique em:</span>
								<Link
									className='text-zinc-400 underline truncate'
									href={certificate.link}
									target='_blank'>
									{certificate.link}
								</Link>
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
