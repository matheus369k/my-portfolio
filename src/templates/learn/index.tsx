import { getTools } from '@/services/get-tools';
import { Suspense } from 'react';
import { ToolsSection } from './components/tools-section';
import { CertificatesSection } from './components/certificates-section';
import { getCertificates } from './services/get-certificates';

export async function Learn() {
	const [{ tools }, { certificates }] = await Promise.all([
		getTools(),
		getCertificates(),
	]);
	return (
		<div className='min-h-dvh flex flex-col gap-12'>
			<Suspense>
				<ToolsSection tools={tools} />
			</Suspense>

			<Suspense>
				<CertificatesSection certificates={certificates} />
			</Suspense>
		</div>
	);
}
