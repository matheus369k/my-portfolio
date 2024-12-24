import { render } from '@testing-library/react';
import { ControlSlideProject } from './control-slides';

const mockCurrentSlide = jest.fn();

jest.mock('../hooks/use-slide', () => ({
	useSlide: () => ({
		state: {
			currentSlide: mockCurrentSlide() | 0,
		},
	}),
}));

jest.mock('lucide-react', () => ({
	ArrowLeft: ({ ...props }) => <svg {...props} data-testid='arrowLeft' />,
	ArrowRight: ({ ...props }) => <svg {...props} data-testid='arrowRight' />,
}));

describe('<ControlSlideProject />', () => {
	it('should render arrowLeft with disable styles', () => {
		mockCurrentSlide.mockReturnValueOnce(0);

		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowLeftElement = getByTestId('arrowLeft');
		expect(arrowLeftElement).toHaveClass('text-zinc-700');
		expect(arrowLeftElement).not.toHaveClass('text-blue-600 cursor-pointer');
	});

	it('should render arrowRight with disable styles', () => {
		mockCurrentSlide.mockReturnValueOnce(5);

		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowRightElement = getByTestId('arrowRight');
		expect(arrowRightElement).toHaveClass('text-zinc-700');
		expect(arrowRightElement).not.toHaveClass('text-blue-600 cursor-pointer');
	});

	it('should render arrowLeft with active styles', () => {
		mockCurrentSlide.mockReturnValueOnce(2);

		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowLeftElement = getByTestId('arrowLeft');
		expect(arrowLeftElement).toHaveClass('text-blue-600 cursor-pointer');
		expect(arrowLeftElement).not.toHaveClass('text-zinc-700');
	});

	it('should render arrowRight with active styles', () => {
		mockCurrentSlide.mockReturnValueOnce(2);

		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowRightElement = getByTestId('arrowRight');
		expect(arrowRightElement).toHaveClass('text-blue-600 cursor-pointer');
		expect(arrowRightElement).not.toHaveClass('text-zinc-700');
	});

	it('should render correct text shown current slide and total slides', () => {
		mockCurrentSlide.mockReturnValueOnce(4);

		const { getByText } = render(<ControlSlideProject total={6} />);

		const textElement = getByText('5 de 6');
		expect(textElement).toBeVisible();
	});

	it('should render arrowLeft with classes to config lib', ()=> {
		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowLeftElement = getByTestId('arrowLeft');
		expect(arrowLeftElement).toHaveClass('glide__arrow glide__arrow--left');
	})

	it('should render arrowRight with classes to config lib', ()=> {
		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const arrowRightElement = getByTestId('arrowRight');
		expect(arrowRightElement).toHaveClass('glide__arrow glide__arrow--right');
	})

	it('should render controlSlideProject with classes and data-prop to config lib', ()=> {
		const { getByTestId } = render(<ControlSlideProject total={6} />);

		const controlSlideProjectElement = getByTestId('controlSlideProject');

		expect(controlSlideProjectElement).toHaveClass('glide__arrows');
		expect(controlSlideProjectElement).toHaveAttribute('data-glide-el', 'controls');
	})
});
