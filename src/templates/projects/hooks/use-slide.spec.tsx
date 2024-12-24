'use client';

import { renderHook } from '@testing-library/react';
import { useSlide } from './use-slide';

const mockGlide = jest.fn();
const mockMount = jest.fn();

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useContext: () => ({
		state: {
			initialSlide: 0,
			currentSlide: 0,
		},
	}),
}));

jest.mock(
	'@glidejs/glide',
	() =>
		class Glide {
			constructor(glideSelector: string, configs: object) {
				mockGlide(glideSelector, configs);
			}

			mount() {
				mockMount();
			}
		},
);

describe('useSlide()', () => {
	it('should call Glide and receive correct configs', () => {
		renderHook(() => useSlide());

		expect(mockGlide).toHaveBeenCalledWith('.glide', {
			type: 'slider',
			animationTimingFunc: 'linear',
			startAt: 0,
			waitForTransition: true,
			gap: 16,
			perView: 1,
			animationDuration: 700,
			rewind: false,
			dragThreshold: false,
		});
	});

	it('should call mount to initialize glide', () => {
		renderHook(() => useSlide());

		expect(mockMount).toHaveBeenCalledTimes(1);
	});

	it('should return state with initialSlide and currentSlide', () => {
		const { result } = renderHook(() => useSlide());

		expect(result.current.state).toMatchObject({
			initialSlide: 0,
			currentSlide: 0,
		});
	});
});
