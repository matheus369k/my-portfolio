'use client';

import { getCertificates } from "./get-certificates";

const mockFetchAPI = jest.fn().mockResolvedValue({
    data: {
        certificates: [
            {
                id: 1,
                name: 'Certificate 1',
                url: 'https://example.com/certificate1',
                image: 'https://example.com/certificate1.png',
            },
        ],
    }
})

jest.mock('@/lib/axios', () => ({
    ...jest.requireActual('@/lib/axios'),
    fetchAPI: {
        get: (route: string) => mockFetchAPI(route),
    },
}));

describe('getCertificates()', () => {
    it('should return an array of certificates', async () => {
        const { certificates } = await getCertificates('min');

        expect(certificates).toMatchObject([
            {
                id: 1,
                name: 'Certificate 1',
                url: 'https://example.com/certificate1',
                image: 'https://example.com/certificate1.png',
            },
        ]);
    })

    it('should acesse correct router when limit is "min"', async () => {
        await getCertificates('min');
        expect(mockFetchAPI).toHaveBeenCalledWith('/certificates/3');
    })

    it('should acesse correct router when limit is "max"', async () => {
        await getCertificates('max');
        expect(mockFetchAPI).toHaveBeenCalledWith('/certificates');
    })
})