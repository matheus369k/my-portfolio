'use client';

import type { Certificates } from '@/@types';
import { getCertificates } from '../services/get-certificates';
import { useState } from 'react';

interface UseCertificatesProps {
	staticDatas: Certificates;
}

export function useCertificates({ staticDatas }: UseCertificatesProps) {
	const [certificates, setCertificates] = useState(staticDatas.certificates);

	async function handleShowMore() {
		const { certificates: certificatesDatas } = await getCertificates('max');

		setCertificates(certificatesDatas);
	}

	return {
		certificates,
		handleShowMore,
	};
}
