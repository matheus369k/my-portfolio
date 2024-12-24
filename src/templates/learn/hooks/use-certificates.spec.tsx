'use client';

import { renderHook, waitFor } from '@testing-library/react';
import { useCertificates } from './use-certificates';
import { act } from 'react';

const mockGetCertificates = jest.fn().mockResolvedValue({
	certificates: [
		{
			title: 'Certificate 1',
			validation_code: '864b221e-872d-4812-a7d8-e624e5713a45',
			image_url: 'https://example.com/certificate1.png',
			verification_url: 'https://example.com/validation/certificate1',
		},
		{
			title: 'Certificate 2',
			validation_code: '864b2284e-872d54812-a7d8-e624e5713a45',
			image_url: 'https://example.com/certificate2.png',
			verification_url: 'https://example.com/validation/certificate2',
		},
	],
});

jest.mock('../services/get-certificates', () => ({
	getCertificates: (query: string) => mockGetCertificates(query),
}));

describe('useCertificates()', () => {
	it('should render and return certificates initial data', () => {
		const { result } = renderHook(() => {
			return useCertificates({
				staticDatas: {
					certificates: [
						{
							title: 'Certificate 1',
							validation_code: '864b221e-872d-4812-a7d8-e624e5713a45',
							image_url: 'https://example.com/certificate1.png',
							verification_url: 'https://example.com/validation/certificate1',
						},
					],
				},
			});
		});

		expect(result.current.certificates).toMatchObject([
			{
				title: 'Certificate 1',
				validation_code: '864b221e-872d-4812-a7d8-e624e5713a45',
				image_url: 'https://example.com/certificate1.png',
				verification_url: 'https://example.com/validation/certificate1',
			},
		]);
	});

	it('should call handleShowMore function and update certificates', async () => {
		const { result } = renderHook(() => {
			return useCertificates({
				staticDatas: {
					certificates: [],
				},
			});
		});

		await act(async () => {
			await result.current.handleShowMore();
		});

		expect(result.current.certificates).toMatchObject([
			{
				title: 'Certificate 1',
				validation_code: '864b221e-872d-4812-a7d8-e624e5713a45',
				image_url: 'https://example.com/certificate1.png',
				verification_url: 'https://example.com/validation/certificate1',
			},
			{
				title: 'Certificate 2',
				validation_code: '864b2284e-872d54812-a7d8-e624e5713a45',
				image_url: 'https://example.com/certificate2.png',
				verification_url: 'https://example.com/validation/certificate2',
			},
		]);		
	});

	it('should call getCertificates with correct query', async () => {
		const { result } = renderHook(() => {
			return useCertificates({
				staticDatas: {
					certificates: [],
				},
			});
		});

		await act(async () => {
			await result.current.handleShowMore();
		});

		expect(mockGetCertificates).toHaveBeenLastCalledWith('max');
	})
});
