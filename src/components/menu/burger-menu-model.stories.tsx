import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BurgerMenuModel from './burger-menu-model';
import { useState, type ButtonHTMLAttributes } from 'react';

const navbarFields = [
	{ name: 'home', path: '/', borderBottom: true },
	{ name: 'about-me', path: '/about-me', borderBottom: false },
];
const buttonAttributes = (open: boolean, onCloseDropdown: () => void) => ({
	type: 'button',
	id: 'fade-button',
	'aria-controls': open ? 'fade-menu' : undefined,
	'aria-haspopup': 'true',
	'aria-expanded': open ? 'true' : undefined,
	onClick: onCloseDropdown,
});

const meta = {
	title: 'Components/Menu/BurgerMenuModel',
	component: BurgerMenuModel,
	decorators(Story) {
		const [open, setOpen] = useState(false);

		const onCloseDropdown = () => setOpen((state) => !state);

		return (
			<div className='flex items-start justify-start relative h-40'>
				<button
					{...(buttonAttributes(
						open,
						onCloseDropdown,
					) as ButtonHTMLAttributes<HTMLButtonElement>)}>
					Close/Open
				</button>
				{Story({
					args: {
						anchorEl: document.getElementById('fade-button'),
						onCloseDropdown,
						navbarFields,
						open,
					},
				})}
			</div>
		);
	},
	argTypes: {
		anchorEl: {
			description: 'element toggle of the menu',
		},
		open: { description: 'field say modal is showing' },
		navbarFields: { description: 'list of camps in the menu' },
		onCloseDropdown: {
			description: 'function then close menu',
			type: 'function',
		},
	},
	args: {
		anchorEl: document.createElement('button'),
		navbarFields: navbarFields,
		onCloseDropdown() {},
		open: false,
	},
} satisfies Meta<typeof BurgerMenuModel>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
