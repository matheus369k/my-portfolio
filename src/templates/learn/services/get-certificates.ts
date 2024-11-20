'use server';

import type { LimiteCertificates, Certificates } from '@/@types';
import { env } from '@/env';

export async function getCertificates(limit: LimiteCertificates) {
    const limiteCertificates = limit === 'min' ? '/3' : '';
    const response = await fetch(
        `${env.NEXT_PUBLIC_BACK_END_URL}/certificates${limiteCertificates}`,
    );
    const data: Certificates = await response.json();

    return {
        ...data,
    };
}