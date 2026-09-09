import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AvatarBorder } from './avatar-border';

const meta = {
	title: 'Components/UI/AvatarBorder',
	component: AvatarBorder,
	argTypes: {
		animation: {
			control: { type: 'select' },
			options: ['reverse', 'normal'],
			description: 'Direction to animation',
		},
		hiddenBorder: {
			control: {
				type: 'select',
				options: ['top', 'left', 'right', 'bottom'],
			},
			description: 'Side than hidden',
		},
		className: {
			description:
				'custom class, but defined size static. ex: size-20 | size-[340px]',
		},
	},
	args: {
		hiddenBorder: 'top',
		animation: 'normal',
		className: 'size-[340px]',
	},
	decorators(Story) {
		return (
			<div className='relative size-[354px] rounded-full flex'>{Story()}</div>
		);
	},
} satisfies Meta<typeof AvatarBorder>;

type Story = StoryObj<typeof meta>;
export default meta;

export const NormalDirection: Story = {};

export const ReverseDirection: Story = {
	args: {
		hiddenBorder: 'top',
		animation: 'reverse',
		className: 'size-[340px]',
	},
};
