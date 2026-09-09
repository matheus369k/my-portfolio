import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavbarRow } from './navbar-row';

const meta = {
	title: 'Components/UI/NavbarRow',
	component: NavbarRow,
	decorators(Story) {
		return <div className='text-zinc-50'>{Story()}</div>;
	},
	argTypes: {
		children: { description: 'text of the describe field', type: 'string' },
		href: { description: 'link then to redirection user', type: 'string' },
		hasBorderBottom: {
			description: '(used in Mobile mode) add border bottom',
			type: 'boolean',
		},
		isBurgerMenu: { description: 'is Mobile mode', type: 'boolean' },
	},
	args: {
		children: 'apresentação',
		href: '/',
		hasBorderBottom: true,
		isBurgerMenu: false,
	},
} satisfies Meta<typeof NavbarRow>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
