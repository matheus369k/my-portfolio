import { LearnCertificates } from '@/components/learn/certificates';
import { LearnTools } from '@/components/learn/tools';
import { getCertificates } from '@/services/get-certificates';

export default async function Learn() {
	const data = await getCertificates('min');

	return (
		<div className='min-h-dvh flex flex-col gap-12'>
			<LearnTools />

			<LearnCertificates staticDatas={data} />
		</div>
	);
}
