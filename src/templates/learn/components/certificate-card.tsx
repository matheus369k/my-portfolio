'use client';

import type { Certificate } from '@/@types';
import Image from 'next/image';
import Link from 'next/link';

export function CertificateCard({
	image_url,
	title,
	validation_code,
	verification_url,
}: Certificate) {
	return (
		<div className='flex flex-col gap-2 md:gap-4 md:flex-row md:items-center'>
			<Image
				className='rounded-lg'
				src={image_url}
				width={300}
				height={200}
				alt=''
			/>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-semibold truncate'>{title}</h2>
				<p>
					<span className='font-semibold'>Código: </span>
					<span className='text-zinc-400 truncate'>{validation_code}</span>
				</p>
				<p>
					<span className='font-semibold'>Verifique em: </span>
					<Link
						className='text-zinc-400 underline truncate'
						href={verification_url}
						target='_blank'>
						{verification_url}
					</Link>
				</p>
			</div>
		</div>
	);
}
