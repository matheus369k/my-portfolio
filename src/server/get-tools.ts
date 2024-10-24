'use server';

import { backEndApi } from "@/lib/axios"
import type { Tools } from '@/_types';

export async function getTools() {
    const response = await backEndApi.get('/tools');
    const data: Tools = await response.data;

    return {
        ...data,
    };
}