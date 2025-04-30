'use client';

import { render, screen } from '@testing-library/react';
import { ToolsCarousel } from './tools-carousel';
import type { ComponentProps } from 'react';

jest.mock('next/image', () => {
	return ({ fetchPriority, ...props }: ComponentProps<'img'>) => (
		<img {...props} alt='' />
	);
});

describe('ToolsCarousel', () => {
	const tools = {
		front_end: [
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
		],
		back_end: [
			{
				_id: 'id-113',
				name: 'nodejs',
				svg_url: 'http://localhost:3000/svg/nodejs',
			},
		],
		another: [
			{
				_id: 'id-122',
				name: 'git',
				svg_url: 'http://localhost:3000/svg/git',
			},
			{
				_id: 'id-789',
				name: 'figma',
				svg_url: 'http://localhost:3000/svg/figma',
			},
		],
	};

	it('should render correctly', () => {
		render(<ToolsCarousel tools={tools} />);
		screen.getByTitle(/html/i);
		screen.getByTitle(/nodejs/i);
		screen.getByTitle(/git/i);
	});

	it('should render image correctly', () => {
		render(<ToolsCarousel tools={tools} />);
		const imageElements = screen.getAllByRole('presentation');
		expect(imageElements[0]).toHaveAttribute(
			'src',
			'http://localhost:3000/svg/html',
		);
	});

	it('should render component with default classes and custom classes', () => {
		render(
			<ToolsCarousel
				tools={tools}
				data-testid='tools-carousel'
				className='test-class'
			/>,
		);

		const toolsCarousel = screen.getByTestId('tools-carousel');
		expect(toolsCarousel).toHaveClass(
			'w-screen flex justify-between items-center test-class',
		);
	});
});
