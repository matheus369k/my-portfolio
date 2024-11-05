'use server';

import type { FormData } from "@/_types";
import { env } from "@/env";

export async function inviteMail({ from_name, email, message }: FormData) {
    await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/invite-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from_name,
            email,
            message,
        }),
    });
}