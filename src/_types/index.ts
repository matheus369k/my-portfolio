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

export interface Projects {
    projects: {
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
    }[];
}