import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';

const meta = {
	title: 'Components/UI/Label',
	component: Label,
	decorators(Story) {
		return (
			<div className='flex justify-between items-center px-2'>{Story()}</div>
		);
	},
	argTypes: {
		children: { description: 'text for label', type: 'string' },
		errors: {
			description: 'error for field',
			control: { type: 'inline-radio' },
			options: [undefined, { message: 'invalide field' }],
		},
	},
	args: {
		children: 'Name',
		errors: undefined,
	},
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
export const Wrong: Story = {
	args: {
		errors: { message: 'Invalide field', type: 'pattern' },
	},
};
