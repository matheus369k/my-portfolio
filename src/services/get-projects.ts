'use server';

import type { Projects } from '@/_types';
import { env } from '@/env';

export async function getProjects() {
    const res = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/projects`);
    const data: Projects = await res.json();

    return {
        ...data,
    };
}