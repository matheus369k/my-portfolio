'use client';

import { getProjects } from "./get-projects";

const mockFetchAPI = jest.fn().mockResolvedValue({
    data: {
        projects: [{
            _id: '774f310b-147d-4636-828b-37d6c625a289',
            name: 'Project 1',
            slug: 'project-1',
            tools: ['tool1', 'tool2'],
            images_url: {
                png: 'https://example.com/image.png',
                gif: 'https://example.com/image.gif',
            },
            links: {
                deploy: 'https://example.com/deploy',
                repository: 'https://example.com/repository',
            },
            description: 'project 1 description',
        }]
    }
});

jest.mock('@/lib/axios', () => ({
    fetchAPI: (pathName: string ) => mockFetchAPI(pathName)
}))

describe('getProjects()', () => {
    it('should return projects', async () => {
        const { projects } = await getProjects();

        expect(projects).toMatchObject([{
            _id: '774f310b-147d-4636-828b-37d6c625a289',
            name: 'Project 1',
            slug: 'project-1',
            tools: ['tool1', 'tool2'],
            images_url: {
                png: 'https://example.com/image.png',
                gif: 'https://example.com/image.gif',
            },
            links: {
                deploy: 'https://example.com/deploy',
                repository: 'https://example.com/repository',
            },
            description: 'project 1 description',
        }])
    })

    it('should call fetchAPI with correct pathName', async () => {
        await getProjects();

        expect(mockFetchAPI).toHaveBeenCalledWith('/projects');
    })
})