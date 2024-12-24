export interface Certificate {
    title: string;
    image_url: string;
    validation_code: string;
    verification_url: string;
}

export interface Certificates {
    certificates: Certificate[];
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