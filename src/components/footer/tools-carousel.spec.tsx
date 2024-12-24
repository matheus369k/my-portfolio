'use client';

import { render } from '@testing-library/react';
import { ToolsCarousel } from './tools-carousel';
import type { ComponentProps } from 'react';

jest.mock('next/image', () => {
	return ({ fetchPriority, ...props }: ComponentProps<'img'>) => (
		<img {...props} alt='' />
	);
});

const tools = [
	{
		_id: 'id-123',
		name: 'html',
		svg_url: 'http://localhost:3000/svg/html',
	},
	{
		_id: 'id-456',
		name: 'css',
		svg_url: 'http://localhost:3000/svg/css',
	},
	{
		_id: 'id-789',
		name: 'javascript',
		svg_url: 'http://localhost:3000/svg/javascript',
	},
];

describe('<ToolsCarousel />', () => {
	it('should render all component', () => {
		const { getByTestId, getByTitle } = render(
			<ToolsCarousel data-testid='toolsCarousel' tools={tools} />,
		);

		const toolsCarouselElement = getByTestId('toolsCarousel');
		expect(toolsCarouselElement).toBeVisible();
	});

	it('should render all tools and insert correct src each', () => {
		const { getByTitle } = render(<ToolsCarousel tools={tools} />);

		const htmlSkillElement = getByTitle('html');
		expect(htmlSkillElement).toBeVisible();
		expect(htmlSkillElement).toHaveAttribute(
			'src',
			'http://localhost:3000/svg/html',
		);

		const cssSkillElement = getByTitle('css');
		expect(cssSkillElement).toBeVisible();
		expect(cssSkillElement).toHaveAttribute(
			'src',
			'http://localhost:3000/svg/css',
		);

		const javascriptSkillElement = getByTitle('javascript');
		expect(javascriptSkillElement).toBeVisible();
		expect(javascriptSkillElement).toHaveAttribute(
			'src',
			'http://localhost:3000/svg/javascript',
		);
	});

	it('should render component with custom class', () => {
		const { getByTestId } = render(
			<ToolsCarousel
				tools={tools}
				data-testid='toolsCarousel'
				className='test-class'
			/>,
		);

		const containerElement = getByTestId('toolsCarousel');
		expect(containerElement).toHaveClass('test-class');
	});
});
