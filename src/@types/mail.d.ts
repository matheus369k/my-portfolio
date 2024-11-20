import type { FormSchema } from "./mail-schema";

export type FormData = z.infer<typeof FormSchema>;

export interface ReturnInviteMail {
    status: 'ok' | 'error'
};