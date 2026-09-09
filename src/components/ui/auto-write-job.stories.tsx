import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AutoWriteJob from './auto-write-job';

const meta = {
	title: 'Components/UI/AutoWriteJob',
	component: AutoWriteJob,
} satisfies Meta<typeof AutoWriteJob>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
