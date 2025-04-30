import { fireEvent, renderHook, screen } from '@testing-library/react';
import { useSlide } from './use-slide';
import { act, type ReactNode } from 'react';
import {
	slideProjectsContext,
	SlideProjectsContextProvider,
	type StateType,
} from '@/contexts/slide-projects';
import { userEvent } from '@testing-library/user-event';

const wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<SlideProjectsContextProvider>
			<div className='glide'>
				{children}
				<div className='glide__track' data-glide-el='track'>
					<div
						data-glide-el='controls'
						className='glide__arrows absolute right-0 top-1 flex items-center justify-center gap-0.5'>
						<button
							aria-label='Previous'
							type='button'
							data-glide-dir='<'
							className='glide__arrow glide__arrow--left'>
							Previous
						</button>
						<slideProjectsContext.Consumer>
							{({ state }) => <span>{state.currentSlide + 1} de 5</span>}
						</slideProjectsContext.Consumer>
						<button
							aria-label='Next'
							type='button'
							data-glide-dir='>'
							className='glide__arrow glide__arrow--right'>
							Next
						</button>
					</div>
					<ul className='glide__slides'>
						{Array.from({ length: 5 }).map((_, index) => {
							const key = index + 1;
							return (
								<li
									key={`glide_${key}`}
									data-slug={key}
									className='glide__slide'>
									slide_{index}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</SlideProjectsContextProvider>
	);
};

describe('useSlide', () => {
	it('should run correctly', () => {
		const { result } = renderHook(() => useSlide(), {
			wrapper,
		});
		expect(result.current.state.currentSlide).toEqual(0);
		expect(result.current.state.initialSlide).toEqual(0);
	});

	it('should update index queryParam and context value when clicked button next', async () => {
		const user = userEvent.setup();
		const { result } = renderHook(() => useSlide(), {
			wrapper,
		});
		const buttonNext = screen.getByRole('button', { name: /next/i });

		await user.click(buttonNext);

		await screen.findByText(/2 de 5/i);
		const queryParams = window.location.toString().split('?')[1];
		expect(queryParams).toMatch('index=1');
		expect(result.current.state.currentSlide).toEqual(1);
	});

	it('should update index queryParam and context value when clicked button previous', async () => {
		const user = userEvent.setup();
		const { result } = renderHook(() => useSlide(), {
			wrapper,
		});
		const buttonNext = screen.getByRole('button', { name: /next/i });
		const buttonPrevious = screen.getByRole('button', { name: /previous/i });

		await user.click(buttonNext);
		await user.click(buttonNext);
		await user.click(buttonNext);
		await user.click(buttonPrevious);

		await screen.findByText(/3 de 5/i);
		const queryParams = window.location.toString().split('?')[1];
		expect(queryParams).toMatch('index=2');
		expect(result.current.state.currentSlide).toEqual(2);
	});

	it('should restore old slide when load page and has query param index on the url', async () => {
		const url = new URL('http://localhost:3333/');
		url.searchParams.set('index', '4');
		window.history.pushState({}, '', url.toString());
		const { result } = renderHook(() => useSlide(), {
			wrapper,
		});
		await screen.findByText(/5 de 5/i);
		expect(result.current.state.currentSlide).toEqual(4);
	});
});
