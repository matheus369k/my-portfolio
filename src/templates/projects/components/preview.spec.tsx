import { fireEvent, render } from '@testing-library/react';
import { ProjectPreview } from './preview';
import { act } from 'react';
import { mock } from 'node:test';

interface NextImageProps {
	width: number;
	height: number;
	onLoad: () => void;
	className: string;
	loading: 'eager' | 'lazy' | undefined;
	src: string;
	alt: string;
}

const mockUsePreview = jest.fn();

jest.mock('lucide-react', () => ({
	ImageIcon: ({ ...props }) => <svg {...props} data-testid='imageIcon' />,
	ImagePlay: ({ ...props }) => <svg {...props} data-testid='imagePlay' />,
	LoaderCircle: ({ ...props }) => <svg {...props} data-testid='loaderCircle' />,
}));

jest.mock('../hooks/use-preview', () => ({
	usePreview: () => mockUsePreview(),
}));

jest.mock(
	'next/image',
	() =>
		({
			alt,
			className,
			height,
			loading,
			onLoad,
			src,
			width,
		}: NextImageProps) => {
			return (
				<img
					src={src}
					alt={alt}
					className={className}
					height={height}
					loading={loading}
					onLoad={onLoad}
					width={width}
				/>
			);
		},
);

describe('<ProjectPreview />', () => {
	it('should render image with correct src', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const imageElement = getByRole('presentation');
		expect(imageElement).toHaveAttribute(
			'src',
			'https://www.google.com/image.png',
		);
	});

	it('should render preview at state loading', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: true,
			},
		});

		const { getByRole, getByTestId } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const imageElement = getByRole('presentation');
		expect(imageElement).toHaveClass('opacity-20');

		const loaderCircle = getByTestId('loaderCircle');
		expect(loaderCircle).toBeVisible();
	});

	it('should render preview finish loading state', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole, queryByTestId } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const imageElement = getByRole('presentation');
		expect(imageElement).not.toHaveClass('opacity-20');

		const loaderCircle = queryByTestId('loaderCircle');
		expect(loaderCircle).not.toBeInTheDocument();
	});

	it('should render gif button toggle preview with style disabled when fileType for current equal to gif', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'gif',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Gif' });
		expect(buttonImage).toHaveClass('text-zinc-700');
		expect(buttonImage).toBeDisabled();
	});

	it('should render png button toggle preview with style disabled when fileType for current equal to png', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Imagem' });
		expect(buttonImage).toHaveClass('text-zinc-700');
		expect(buttonImage).toBeDisabled();
	});

	it('should render gif button toggle preview without style disabled when fileType for current equal to png', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Gif' });
		expect(buttonImage).not.toHaveClass('text-zinc-700');
		expect(buttonImage).not.toBeDisabled();
	});

	it('should render png button toggle preview without style disabled when fileType for current equal to gif', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'gif',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Imagem' });
		expect(buttonImage).not.toHaveClass('text-zinc-700');
		expect(buttonImage).not.toBeDisabled();
	});

	it('should call handleSetPreviewGif when click button gif', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'png',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Gif' });

		act(()=> fireEvent.click(buttonImage));

		expect(mockUsePreview().handleSetPreviewGif).toHaveBeenCalledTimes(1);
	})

	it('should call handleSetPreviewPng when click button image', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'gif',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const buttonImage = getByRole('button', { name: 'Imagem' });

		act(()=> fireEvent.click(buttonImage));

		expect(mockUsePreview().handleSetPreviewPng).toHaveBeenCalledTimes(1);
	})

	it('should call handlePreviewCompleteLoad when image is loaded', () => {
		mockUsePreview.mockReturnValue({
			handlePreviewCompleteLoad: jest.fn(),
			handleSetPreviewGif: jest.fn(),
			handleSetPreviewPng: jest.fn(),
			state: {
				fileType: 'gif',
				preview: 'https://www.google.com/image.png',
				isLoading: false,
			},
		});

		const { getByRole } = render(
			<ProjectPreview
				png='https://www.google.com/image.png'
				gif='https://www.google.com/image.gif'
			/>,
		);

		const imageElement = getByRole('presentation');

		act(()=> fireEvent.load(imageElement));
		
		expect(mockUsePreview().handlePreviewCompleteLoad).toHaveBeenCalledTimes(1);
	})
});
