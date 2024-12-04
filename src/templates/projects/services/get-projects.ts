'use server';

import type { Projects } from '@/@types';
import { fetchAPI } from '@/lib/axios';

export async function getProjects() {
    const response = await fetchAPI('/projects');
    const data: Projects = await response.data;

    return {
        ...data,
    };
}