import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Title } from './title';

const meta = {
	title: 'Components/UI/Title',
	component: Title,
	argTypes: { children: { description: 'title of the component' } },
	args: {
		children: 'Title Test',
	},
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
