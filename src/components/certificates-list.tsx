import { FormatterDate } from '@/util/formatter-date';
import Link from 'next/link';
import { getCertificates } from '@/services/get-certificates';

export async function CertificatesList() {
	const {certificates} = await getCertificates()

	return certificates.map((certificate) => (
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
				))
}
