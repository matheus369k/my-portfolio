import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectViews from './project-views';

const meta = {
	title: 'Components/ProjectItems/ProjectViews',
	component: ProjectViews,
	decorators(Story) {
		return <div className='h-6 rounded-full'>{Story()}</div>;
	},
	argTypes: {
		accessTotal: {
			description: 'number of the access in the project',
		},
	},
	args: {
		accessTotal: 1546,
	},
} satisfies Meta<typeof ProjectViews>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
