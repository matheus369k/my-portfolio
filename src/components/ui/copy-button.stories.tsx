import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CopyButton } from './copy-button';

const meta = {
	title: 'Components/UI/CopyButton',
	component: CopyButton,
	argTypes: {
		link: {
			control: 'text',
			description: 'link to be copy',
			type: 'string',
		},
	},
	args: {
		link: 'http://localhot:6006',
	},
} satisfies Meta<typeof CopyButton>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
