'use server';

import { getCertificates } from "../services/get-certificates";
import { LearnCertificates } from "./certificates";

export async function ResponseCertificates() {
	const data = await getCertificates('min');

    return <LearnCertificates staticDatas={data} />;
}