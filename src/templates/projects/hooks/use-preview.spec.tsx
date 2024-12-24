'use client';

import { renderHook } from '@testing-library/react';
import { usePreview } from './use-preview';
import { act } from 'react';

describe('usePreview()', () => {
	it('should return initial state', () => {
		const { result } = renderHook(() =>
			usePreview({
				png: 'https://exemple.com/png',
				gif: 'https://exemple.com/gif',
			}),
		);

		expect(result.current.state).toMatchObject({
			preview: 'https://exemple.com/png',
			fileType: 'png',
			isLoading: true,
		});
	});

	it('should stop loading when handlePreviewCompleteLoad is called', () => {
		const { result } = renderHook(() =>
			usePreview({
				png: 'https://exemple.com/png',
				gif: 'https://exemple.com/gif',
			}),
		);

		act(() => {
			result.current.handlePreviewCompleteLoad();
		});

		expect(result.current.state.isLoading).toBeFalsy();
	});

	it('should change gif image and active loading state when handleSetPreviewGif is called', () => {
		const { result } = renderHook(() =>
			usePreview({
				png: 'https://exemple.com/png',
				gif: 'https://exemple.com/gif',
			}),
		);

		act(() => result.current.handleSetPreviewGif());

		expect(result.current.state).toMatchObject({
			preview: 'https://exemple.com/gif',
			fileType: 'gif',
			isLoading: true,
		});
	});

    it('should change png image and active loading state when handleSetPreviewPng is called', () => {
		const { result } = renderHook(() =>
			usePreview({
				png: 'https://exemple.com/png',
				gif: 'https://exemple.com/gif',
			}),
		);

        act(() => result.current.handleSetPreviewGif());

        expect(result.current.state).toMatchObject({
            preview: 'https://exemple.com/gif',
            fileType: 'gif',
            isLoading: true,
        });

        act(() => result.current.handleSetPreviewPng());

        expect(result.current.state).toMatchObject({
            preview: 'https://exemple.com/png',
            fileType: 'png',
            isLoading: true,
        });
    })
});
