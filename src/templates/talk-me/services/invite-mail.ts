'use server';

import type { FormData, ReturnInviteMail } from "@/@types";
import { fetchAPI } from "@/lib/axios";

export async function inviteMail({ from_name, email, message }: FormData): Promise<ReturnInviteMail> {
    const { status } = await fetchAPI.post('/invite-email', {
        from_name,
        email,
        message,
    }
    ).then((): ReturnInviteMail => {
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