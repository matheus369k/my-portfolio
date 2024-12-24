'use client';

import { act, fireEvent, render } from '@testing-library/react';
import {
	slideProjectsContext,
	SlideProjectsContextProvider,
} from './slide-projects';

import { useContext } from 'react';

const TestComponent = () => {
	const { handleSetCurrentSlide, state } = useContext(slideProjectsContext);

	return (
		<div data-testid='testComponent'>
			<p data-testid='currentSlide'>{state.currentSlide}</p>
			<p data-testid='initialSlide'>{state.initialSlide}</p>
			<button
				onClick={() => handleSetCurrentSlide({ currentSlide: 1 })}
				type='button'>
				set Current
			</button>
		</div>
	);
};

describe('SlideProjectsContext', () => {
	it('should receive correct initial state', () => {
		const { getByTestId } = render(
			<SlideProjectsContextProvider>
				<TestComponent />
			</SlideProjectsContextProvider>,
		);

		const currentSlideElement = getByTestId('currentSlide');
		expect(currentSlideElement).toHaveTextContent('0');

		const initialSlideElement = getByTestId('initialSlide');
		expect(initialSlideElement).toHaveTextContent('0');
	});

	it('should set new currentSlide when call function handleSetCurrentSlide', () => {
		const { getByRole, getByTestId } = render(
			<SlideProjectsContextProvider>
				<TestComponent />
			</SlideProjectsContextProvider>,
		);

		const buttonElement = getByRole('button');

		act(() => {
			fireEvent.click(buttonElement);
		});

		const initialSlideElement = getByTestId('initialSlide');
		expect(initialSlideElement).toHaveTextContent('0');

		const currentSlideElement = getByTestId('currentSlide');
		expect(currentSlideElement).toHaveTextContent('1');
	});

	it('should set other initialSlide when load site and url has index param', () => {
		act(() => {
			const url = new URL(window.location.toString());
			url.searchParams.set('index', '6');
			window.history.pushState({}, '', url);
		});
        
		const { getByTestId } = render(
			<SlideProjectsContextProvider>
				<TestComponent />
			</SlideProjectsContextProvider>,
		);

		const initialSlideElement = getByTestId('initialSlide');
		expect(initialSlideElement).toHaveTextContent('6');

		const currentSlideElement = getByTestId('currentSlide');
		expect(currentSlideElement).toHaveTextContent('0');
	});
});
