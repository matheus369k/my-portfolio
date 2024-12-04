'use server';

import type { LimiteCertificates, Certificates } from '@/@types';
import { fetchAPI } from '@/lib/axios';

export async function getCertificates(limit: LimiteCertificates) {
    const limiteCertificates = limit === 'min' ? '/3' : '';

    const response = await fetchAPI.get(`/certificates${limiteCertificates}`);
    const data: Certificates = await response.data;

    return {
        ...data,
    };
}