import { LearnCertificates } from './components/certificates';
import { LearnTools } from './components/tools';
import { getCertificates } from './services/get-certificates';
import { Suspense } from 'react';

export async function Learn() {
	const data = await getCertificates('min');

	return (
		<div className='min-h-dvh flex flex-col gap-12'>
			<Suspense>
				<LearnTools />
			</Suspense>

			<Suspense>
				<LearnCertificates staticDatas={data} />
			</Suspense>
		</div>
	);
}
