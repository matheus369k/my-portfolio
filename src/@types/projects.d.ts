export interface ProjectImageUrl {
    png: string;
    gif: string;
};

export interface ProjectType {
    _id: string;
    name: string;
    slug: string;
    tools: string[];
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