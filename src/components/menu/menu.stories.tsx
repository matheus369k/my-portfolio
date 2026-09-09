import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Menu } from './menu';
import { div } from 'motion/react-client';

const meta = {
	title: 'Components/Menu/Menu',
	component: Menu,
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/projects/all',
			},
		},
	},
	decorators(Story) {
		return <div className='mr-auto w-fit'>{Story()}</div>;
	},
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;
export default meta;

export const DesktopMode: Story = {
	afterEach({ canvasElement }) {
		canvasElement
			.querySelector('[aria-label=desktop-navbar-menu]')
			?.classList.add('md:flex');
		canvasElement
			.querySelector('[aria-label=burger-navbar-menu]')
			?.classList.add('md:hidden');
	},
};
export const MobileMode: Story = {
	afterEach({ canvasElement }) {
		canvasElement
			.querySelector('[aria-label=burger-navbar-menu]')
			?.classList.remove('md:hidden');
		canvasElement
			.querySelector('[aria-label=desktop-navbar-menu]')
			?.classList.remove('md:flex');
	},
};
