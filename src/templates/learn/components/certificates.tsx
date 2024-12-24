'use client';

import type { Certificates } from '@/@types';
import { ArrowDownIcon } from 'lucide-react';
import { Title } from '@/components/title';
import { useCertificates } from '../hooks/use-certificates';
import { CertificateCard } from './certificate-card';

export function LearnCertificates({
	staticDatas,
}: { staticDatas: Certificates }) {
	const { certificates, handleShowMore } = useCertificates({ staticDatas });
	const hasLessThreeCertificates = certificates.length <= 3;

	return (
		<section className='flex flex-col gap-8'>
			<Title>Certificados</Title>

			<div
				data-testid='listCertificates'
				className={`relative flex flex-col leading-relaxed gap-8 md:pl-8 ${hasLessThreeCertificates ? 'max-h-[775px] overflow-hidden md:max-h-[575px]' : ''}`}>
				{certificates.map((certificate) => {
					return (
						<CertificateCard
							key={certificate.validation_code}
							{...certificate}
						/>
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
