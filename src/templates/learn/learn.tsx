import { ResponseCertificates } from './components/response-certificates';
import { ResponseTools } from './components/response-tools';
import { Suspense } from 'react';

export function Learn() {
	return (
		<div className='min-h-dvh flex flex-col gap-12'>
			<Suspense>
				<ResponseTools />
			</Suspense>

			<Suspense>
				<ResponseCertificates />
			</Suspense>
		</div>
	);
}
