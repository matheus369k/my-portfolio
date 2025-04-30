import type { ReactNode } from 'react';
import { ControlSlideProject } from './control-slides';
import { SlideProjectsContextProvider } from '@/contexts/slide-projects';
import { render, screen } from '@testing-library/react';

const wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<SlideProjectsContextProvider>
			<div className='glide'>
				<div className='glide__track' data-glide-el='track'>
					{children}
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

describe('ControlSlideProject', () => {
	it('should render correctly', () => {
		render(<ControlSlideProject total={5} />, { wrapper });
		screen.getByRole('button', { name: /next/i });
		screen.getByRole('button', { name: /previous/i });
		screen.getByText(/1 de 5/i);
		const controlContainer = screen.getByRole('button', {
			name: /previous/i,
		}).parentNode;
		expect(controlContainer).toHaveClass('glide__arrows');
		expect(controlContainer).toHaveAttribute('data-glide-el', 'controls');
	});

	it('should disabled button next when is first slide', () => {
		render(<ControlSlideProject total={1} />, { wrapper });
		const buttonNext = screen.getByRole('button', { name: /next/i });
		expect(buttonNext).toBeDisabled();
	});

	it('should disabled button next when is last slide', () => {
		render(<ControlSlideProject total={5} />, { wrapper });
		const buttonPrevious = screen.getByRole('button', { name: /previous/i });
		expect(buttonPrevious).toBeDisabled();
	});
});
