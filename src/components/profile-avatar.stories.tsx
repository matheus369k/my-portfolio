import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProfileAvatar } from './profile-avatar';

const meta = {
	title: 'Components/ProfileAvatar',
	component: ProfileAvatar,
} satisfies Meta<typeof ProfileAvatar>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
