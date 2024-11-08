import { z } from "zod";

export interface Certificates {
    certificates: {
        title: string;
        validation_code: string;
        image_url: string;
        verification_url: string;
    }[];
}

export type LimiteCertificates = 'min' | 'max';

export interface Tool {
    _id: string;
    name: string;
    svg_url: string;
}

export interface Tools {
    tools: Tool[];
}

export interface ProjectImageUrl {
    png: string;
    gif: string;
};

export interface ProjectType {
    _id: string;
    name: string;
    slug: string;
    tools: [string];
    images_url: ProjectImageUrl
    links: {
        deploy: string;
        repository: string;
    };
    description: string;
}

export interface Projects {
    projects: ProjectType[];
}

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

export type FormData = z.infer<typeof FormSchema>;

export interface ReturnInviteMail {
    status: 'ok' | 'error'
};