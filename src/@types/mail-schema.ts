import { z } from "zod";

export const FormSchema = z.object({
    from_name: z
        .string()
        .min(1, {
            message: 'Nome é obrigatório',
        })
        .regex(/^[a-zA-Z].*$/, 'Nome inválido'),
    email: z
        .string()
        .min(1, {
            message: 'E-Mail é obrigatório',
        })
        .email('E-Mail inválido'),
    message: z
        .string()
        .min(1, {
            message: 'Mensagem é obrigatória',
        })
        .regex(/^[A-Za-z0-9.,!? ]{1,255}$/, 'Mensagem inválida'),
});