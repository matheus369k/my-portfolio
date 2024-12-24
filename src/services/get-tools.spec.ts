'use client';

import { getTools } from "./get-tools";

const mockFetchAPIGet = jest.fn().mockResolvedValue({
    data: {
        tools: [
            {
                id: 1,
                title: 'title',
                link: 'link',
                description: 'description',
                tags: ['tag1', 'tag2']
            }
        ]
    }
});

jest.mock('@/lib/axios', () => ({
    ...jest.requireActual('@/lib/axios'),
    fetchAPI: {
        get: (route: string) => mockFetchAPIGet(route)
    }
}))

describe('getTools()', () => {
    it('should return tools', async () => {
        const { tools } = await getTools();

        expect(tools).toMatchObject([{
            id: 1,
            title: 'title',
            link: 'link',
            description: 'description',
            tags: ['tag1', 'tag2']
        }])
    });

    it('should be a request on the corret route', async () => {
        await getTools();

        expect(mockFetchAPIGet.mock.lastCall[0]).toBe('/tools');
    })
});