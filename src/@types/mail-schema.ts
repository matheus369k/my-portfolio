import { z } from 'zod'

export const FormSchema = z.object({
  from_name: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório',
    })
    .regex(/^[a-zA-Z].*$/, 'Nome inválido')
    .max(50, 'Nome excede o tamanho máximo'),
  email: z
    .string()
    .min(1, {
      message: 'E-Mail é obrigatório',
    })
    .email('E-Mail inválido')
    .max(50, 'E-Mail excede o tamanho máximo'),
  message: z
    .string()
    .min(15, {
      message: 'Mensagem é obrigatória',
    })
    .max(1000),
})
