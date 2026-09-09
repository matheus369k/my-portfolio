import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BurgerMenu } from './burger-menu';

const navbarFields = [
	{ name: 'home', path: '/', borderBottom: true },
	{ name: 'about-me', path: '/about-me', borderBottom: false },
];

const meta = {
	title: 'Components/Menu/BurgerMenu',
	component: BurgerMenu,
	args: { navbarFields },
	decorators(Story) {
		return <div className='mr-auto w-fit h-40 relative'>{Story()}</div>;
	},
	afterEach() {
		document
			.querySelector('[aria-label=burger-navbar-menu]')
			?.classList.remove('md:hidden');
	},
} satisfies Meta<typeof BurgerMenu>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
