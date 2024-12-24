'use client';

import { render } from '@testing-library/react';
import { LearnTools } from './tools';

jest.mock('./tool-card', () => ({
	ToolCard: ({ ...props }) => <div {...props}>ToolCard</div>,
}));

jest.mock('@/components/title', () => ({
	Title: ({ children, ...props }: { children: React.ReactNode }) => (
		<h1>{children}</h1>
	),
}));

describe('<LearnTools />', () => {
	it('should render title component and with correct text', () => {
		const { getByText } = render(
			<LearnTools
				tools={[
					{
						_id: '1',
						name: 'Tool 1',
						svg_url: 'https://example.com/tool1.svg',
					},
				]}
			/>,
		);

		const titleElement = getByText('Ferramentas');
		expect(titleElement).toBeVisible();
	});

	it('should render ToolCard component with correct props', () => {
		const { getByText } = render(
			<LearnTools
				tools={[
					{
						_id: '1',
						name: 'Tool 1',
						svg_url: 'https://example.com/tool1.svg',
					},
				]}
			/>,
		);

		const toolCardElement = getByText('ToolCard');
		expect(toolCardElement).toHaveAttribute(
			'_id',
			'1',
		);
		expect(toolCardElement).toHaveAttribute(
			'name',
			'Tool 1',
		);
		expect(toolCardElement).toHaveAttribute(
			'svg_url',
			'https://example.com/tool1.svg',
		);
	})

	it('should render all ToolCards components', () => {
		const { getAllByText } = render(
			<LearnTools
				tools={[
					{
						_id: '1',
						name: 'Tool 1',
						svg_url: 'https://example.com/tool1.svg',
					},
					{
						_id: '2',
						name: 'Tool 2',
						svg_url: 'https://example.com/tool2.svg',
					},
				]}
			/>,
		);

		const toolCardElements = getAllByText('ToolCard');
		expect(toolCardElements).toHaveLength(2);
	})
});
