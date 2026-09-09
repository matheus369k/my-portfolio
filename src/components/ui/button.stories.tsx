import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Github } from 'lucide-react';

const meta = {
	title: 'Components/UI/Button',
	component: Button,
	argTypes: {
		size: {
			control: { type: 'inline-radio' },
			description: 'size of button',
			options: ['full', 'small'],
		},
		types: {
			control: {
				type: 'select',
			},
			options: ['primary', 'disabled', 'outline', 'icon'],
			description: 'styles of button',
		},
		children: { description: 'text of button', type: 'string' },
		className: { description: 'custom style' },
	},
	args: {
		children: 'play',
		size: 'small',
		types: 'primary',
		className: 'text-zinc-50',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {};
export const Disabled: Story = {
	args: {
		types: 'disabled',
	},
};
export const Outline: Story = {
	args: {
		types: 'outline',
		className: 'text-invert',
	},
};

export const icon: Story = {
	args: {
		children: <Github />,
		className: 'text-invert',
		types: 'icon',
	},
};
