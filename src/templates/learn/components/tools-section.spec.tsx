import { render, screen } from '@testing-library/react';
import { ToolsSection } from './tools-section';
import type { Tools } from '@/@types';
import type React from 'react';
import type { ImgHTMLAttributes } from 'react';

jest.mock(
	'next/image',
	() =>
		({ fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
			<img {...props} alt={props.alt} />
		),
);

describe('ToolsSection', () => {
	const { tools }: Tools = {
		tools: {
			front_end: [
				{
					_id: '1',
					name: 'React',
					svg_url: 'https://reactjs.org/logo-og.png',
				},
				{
					_id: '2',
					name: 'Next.js',
					svg_url: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
				},
			],
			back_end: [
				{
					_id: '3',
					name: 'Node.js',
					svg_url: 'https://nodejs.org/static/images/logo.svg',
				},
				{
					_id: '4',
					name: 'Express',
					svg_url: 'https://expressjs.com/images/favicon.png',
				},
			],
			another: [
				{
					_id: '5',
					name: 'MongoDB',
					svg_url: 'https://www.mongodb.com/assets/images/global/favicon.ico',
				},
				{
					_id: '6',
					name: 'Prisma',
					svg_url: 'https://www.prisma.io/images/favicon.png',
				},
			],
		},
	};

	it('should render correctly', () => {
		render(<ToolsSection tools={tools} />);
		screen.getByRole('heading', { level: 1, name: /Ferramentas/i });
		screen.getByRole('heading', { level: 3, name: /Front End/i });
		screen.getByRole('heading', { level: 3, name: /Back End/i });
		screen.getByRole('heading', { level: 3, name: /Outros/i });
		screen.getByRole('img', {
			name: /React: Uma ferramenta usada no mundo da programação/i,
		});
		screen.getByRole('img', {
			name: /Node.js: Uma ferramenta usada no mundo da programação/i,
		});
		screen.getByRole('img', {
			name: /MongoDB: Uma ferramenta usada no mundo da programação/i,
		});
	});
});
