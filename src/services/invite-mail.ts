'use server';

import type { FormData, ReturnInviteMail } from "@/_types";
import { env } from "@/env";

export async function inviteMail({ from_name, email, message }: FormData): Promise<ReturnInviteMail> {
    const { status } = await fetch(`${env.NEXT_PUBLIC_BACK_END_URL}/invite-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from_name,
            email,
            message,
        }),
    }).then((): ReturnInviteMail => {
        return {
            status: 'ok'
        }
    }).catch((): ReturnInviteMail => {
        return {
            status: 'error'
        }
    });

    return {
        status
    }
}