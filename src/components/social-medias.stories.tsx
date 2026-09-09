import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SocialMedias } from './social-medias';

const meta = {
	title: 'Components/SocialMedias',
	component: SocialMedias,
} satisfies Meta<typeof SocialMedias>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
