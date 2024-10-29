'use server';

import type { Tools } from "@/_types";
import { env } from "@/env";

export async function getTools() {
	const response = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/tools`);
	const data: Tools = await response.json();

	return {
		...data,
	};
}