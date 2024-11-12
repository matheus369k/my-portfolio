'use client';

import type { Certificates } from '@/_types';
import { ArrowDownIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCertificates } from '@/services/get-certificates';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Title } from '../title';

export function LearnCertificates({
	staticDatas,
}: { staticDatas: Certificates }) {
	const [certificates, setCertificates] = useState(staticDatas.certificates);
	const { data } = useQuery<Certificates>({
		queryKey: ['certificates'],
		queryFn: async () => await getCertificates('max'),
	});

	function handleShowMore() {
		if (!data) return;

		setCertificates(data.certificates);
	}

	return (
		<section className='flex flex-col gap-8'>
			<Title>Certificados</Title>

			<div
				className={`relative pl-8 flex flex-col gap-8 leading-relaxed ${certificates.length <= 3 ? 'max-h-[575px] overflow-hidden' : ''}`}>
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
								<h2 className='text-2xl font-semibold'>{certificate.title}</h2>
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

				{certificates.length <= 3 && (
					<div className='absolute bottom-0 bg-gradient-to-t from-zinc-900 to-zinc-900/40 w-full h-28 flex justify-center items-center'>
						<button onClick={handleShowMore} type='button' title='Mostrar mais'>
							<ArrowDownIcon className='size-12 text-blue-600' />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
