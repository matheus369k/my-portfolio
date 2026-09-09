import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseLink } from './base-link';

const meta = {
	title: 'Components/UI/BaseLinks',
	component: BaseLink,
	argTypes: {
		href: {
			control: {
				type: 'text',
			},
			description: 'Link to redirection when clicked',
		},
		children: {
			description: 'Child should stay inside',
		},
		className: {
			description: 'custom styles',
		},
		size: {
			control: { type: 'inline-radio' },
			description: 'size of button',
			options: ['full', 'fit'],
		},
	},
	args: {
		href: 'http://localhost:6006',
		children: <button type='button'>Save</button>,
		className: 'bg-zinc-900 rounded px-6 py-1 text-zinc-50',
		size: 'fit',
	},
} satisfies Meta<typeof BaseLink>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
