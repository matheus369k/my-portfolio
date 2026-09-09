import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectLoading } from './project-loading';

const meta = {
	title: 'Components/ProjectItems/ProjectLoading',
	component: ProjectLoading,
} satisfies Meta<typeof ProjectLoading>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
