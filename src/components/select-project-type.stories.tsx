import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SelectTypeProjects } from './select-project-type';

const meta = {
	title: 'Components/SelectProjectType',
	component: SelectTypeProjects,
	decorators(Story) {
		return (
			<div className='h-12 relative'>
				<div className='absolute left-1/2 -top-20'>{Story()}</div>
			</div>
		);
	},
} satisfies Meta<typeof SelectTypeProjects>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/projects/all',
			},
		},
	},
};
