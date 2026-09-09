import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ParticlesCanvas from './particles';

const meta = {
	title: 'Components/UI/Particles',
	component: ParticlesCanvas,
	decorators(Story) {
		return <div className='h-96'>{Story()}</div>;
	},
} satisfies Meta<typeof ParticlesCanvas>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
