'use client';

import type { Certificates } from '@/@types';
import { ArrowDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/components/title';
import { useCertificates } from '../hooks/use-certificates';

export function LearnCertificates({
	staticDatas,
}: { staticDatas: Certificates }) {
	const { certificates, handleShowMore } = useCertificates({ staticDatas });
	const hasLessThreeCertificates = certificates.length <= 3;

	return (
		<section className='flex flex-col gap-8'>
			<Title>Certificados</Title>

			<div
				className={`relative flex flex-col leading-relaxed gap-8 md:pl-8 ${hasLessThreeCertificates ? 'max-h-[775px] overflow-hidden md:max-h-[575px]' : ''}`}>
				{certificates.map((certificate) => {
					return (
						<div
							key={certificate.validation_code}
							className='flex flex-col gap-2 md:gap-4 md:flex-row md:items-center'>
							<Image
								className='rounded-lg'
								src={certificate.image_url}
								width={300}
								height={200}
								alt=''
							/>
							<div className='flex flex-col'>
								<h2 className='text-2xl font-semibold truncate'>
									{certificate.title}
								</h2>
								<p>
									<span className='font-semibold'>Código: </span>
									<span className='text-zinc-400 truncate'>
										{certificate.validation_code}
									</span>
								</p>
								<p>
									<span className='font-semibold'>Verifique em: </span>
									<Link
										className='text-zinc-400 underline truncate'
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
