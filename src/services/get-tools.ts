'use server';

import type { Tools } from "@/@types";
import { fetchAPI } from "@/lib/axios";

export async function getTools() {
	const response = await fetchAPI.get('/tools');
	const data: Tools = await response.data;

	return {
		...data,
	};
}