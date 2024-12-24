'use client';

import { render, renderHook } from '@testing-library/react';
import { useVisibleSlide } from './use-visible-slide';

const mockHandleSetCurrentSlide = jest.fn();

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useContext: () => ({
		handleSetCurrentSlide: ({ ...props }) => mockHandleSetCurrentSlide(props),
	}),
}));

describe('useVisibleSlide()', () => {
	const originalIntersectionObserver = global.IntersectionObserver;

	afterEach(() => {
		global.IntersectionObserver = originalIntersectionObserver;
	});

	it('should be locked when slug is not found', () => {
		const mockObserver = jest.fn();

		global.IntersectionObserver = jest
			.fn()
			.mockImplementation((callback, options) => ({
				observe: mockObserver,
				unobserve: jest.fn(),
				disconnect: jest.fn(),
				root: options?.root ?? null,
				rootMargin: options?.rootMargin ?? '0px',
				thresholds: options?.threshold ?? [0],
				takeRecords: jest.fn().mockReturnValue([]),
			}));

		renderHook(() => useVisibleSlide({ index: 0, slug: 'teste' }));

		expect(mockObserver).not.toHaveBeenCalled();
	});

	it('should call callbackObserver when element was found but not visible', () => {
		const mockObserver = jest.fn();

		global.IntersectionObserver = jest
			.fn()
			.mockImplementation((callback, option) => {
				const entries = [
					{
						isIntersecting: false,
						boundingClientRect: {} as DOMRectReadOnly,
						intersectionRatio: 0,
						intersectionRect: {} as DOMRectReadOnly,
						rootBounds: null,
						target: {} as Element,
						time: 0,
					},
				];

				callback(
					entries as IntersectionObserverEntry[],
					{} as IntersectionObserver,
				);

				return {
					observe: mockObserver,
					unobserve: jest.fn(),
					disconnect: jest.fn(),
					takeRecords: jest.fn(),
				};
			});

		render(<div hidden data-slug='teste' />);

		renderHook(() => useVisibleSlide({ index: 0, slug: 'teste' }));

		expect(mockObserver).toHaveBeenCalled();
		expect(mockHandleSetCurrentSlide).not.toHaveBeenCalled();
	});

	it('should call add new currentSlide on context and set urlState when element was found and visible', () => {
		global.IntersectionObserver = jest
			.fn()
			.mockImplementation((callback, option) => {
				const entries = [
					{
						isIntersecting: true,
						boundingClientRect: {} as DOMRectReadOnly,
						intersectionRatio: 0,
						intersectionRect: {} as DOMRectReadOnly,
						rootBounds: null,
						target: {} as Element,
						time: 0,
					},
				];

				callback(
					entries as IntersectionObserverEntry[],
					{} as IntersectionObserver,
				);

				return {
					observe: jest.fn(),
					unobserve: jest.fn(),
					disconnect: jest.fn(),
					takeRecords: jest.fn(),
				};
			});

		render(<div data-slug='teste' />);

		renderHook(() => useVisibleSlide({ index: 0, slug: 'teste' }));

		expect(mockHandleSetCurrentSlide).toHaveBeenCalledWith({ currentSlide: 0 });
        expect(window.location.href).toContain('index=0');
	});
});
