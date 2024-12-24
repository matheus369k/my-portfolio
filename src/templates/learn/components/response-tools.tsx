'use server';

import { getTools } from '@/services/get-tools';
import { LearnTools } from './tools';

export async function ResponseTools() {
	const { tools } = await getTools();

	return <LearnTools tools={tools} />
}
