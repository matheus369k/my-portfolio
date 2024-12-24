import { render } from '@testing-library/react';
import { ToolCard } from './tool-card';

interface NextImageMock {
	src: string;
	alt: string;
	width: number;
	height: number;
}

jest.mock(
	'next/image',
	() =>
		({ src, alt, width, height, ...props }: NextImageMock) => (
			<img src={src} alt={alt} width={width} height={height} />
		),
);

describe('<ToolCard />', () => {
	it('should render ToolCard component with correct props', () => {
		const { getByRole } = render(
			<ToolCard
				_id='1'
				name='Tool 1'
				svg_url='https://example.com/tool1.svg'
			/>,
		);

		const imageElement = getByRole('img');
		expect(imageElement).toHaveAttribute(
			'src',
			'https://example.com/tool1.svg',
		);
		expect(imageElement).toHaveAttribute(
			'alt',
			'Tool 1: Uma ferramenta usada no mundo da programação',
		);
	});

	it('should render ToolCard component with correct width and height', () => {
		const { getByRole } = render(
			<ToolCard
				_id='1'
				name='Tool 1'
				svg_url='https://example.com/tool1.svg'
			/>,
		);

		const imageElement = getByRole('img');
        expect(imageElement).toHaveAttribute('width', '100');
        expect(imageElement).toHaveAttribute('height', '100');
	});
});
