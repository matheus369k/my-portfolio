import { Title } from '@/components/title';
import { CertificatesList } from '@/components/certificates-list';
import { ToolsList } from '@/components/tools-list';
import { Suspense } from 'react';
import { div as MotionDiv } from 'motion/react-client';

export default function LearnPage() {
	return (
		<MotionDiv initial={{opacity: 0}} animate={{opacity: 1}} className='min-h-dvh flex flex-col gap-12'>
		<section className='flex flex-col gap-8'>
			<Title>Ferramentas</Title>

			<Suspense>
				<ToolsList />
			</Suspense>
		</section>

			<section className='flex flex-col gap-8'>	
				<Title>Certificados</Title>

				<div className='relative flex flex-col leading-relaxed gap-y-8 pl-10 md:pl-14 border-spacing-0.5 border-blue-600 border-l before:w-3.5 before:h-3.5 before:bg-blue-600 before:absolute before:top-0 before:-left-[0.4375rem] before:rounded-full after:w-3.5 after:h-3.5 after:bg-blue-600 after:absolute after:-left-[0.4375rem] after:bottom-0 after:rounded-full'>
					<Suspense>
						<CertificatesList />
					</Suspense>
				</div>
			</section>
		</MotionDiv>)
}
