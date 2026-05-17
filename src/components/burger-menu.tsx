'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { AlignJustify, X } from 'lucide-react';
import { NavbarRow } from './ui/navbar-row';

type BurgerMenuProps = {
	navbarFields: {
		name: string;
		path: string;
		borderBottom: boolean;
	}[];
};

export function BurgerMenu({ navbarFields }: BurgerMenuProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	function handleClickDropDown(event: React.MouseEvent<HTMLElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleCloseDropdown() {
		setAnchorEl(null);
	}

	function renderMenuIconUI() {
		if (open) {
			return (
				<i>
					<X className='size-10 text-blue-600' />
				</i>
			);
		}

		return (
			<i>
				<AlignJustify className='size-10 text-blue-600' />
			</i>
		);
	}

	return (
		<div
			aria-label='burger-navbar-menu'
			className='flex flex-col z-10 md:hidden'>
			<Button
				id='fade-button'
				aria-label={open ? 'close-menu' : 'open-menu'}
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClickDropDown}
				className='ml-auto'>
				{renderMenuIconUI()}
			</Button>

			<Menu
				variant='menu'
				id='fade-menu'
				slotProps={{
					list: {
						'aria-labelledby': 'fade-button',
					},
				}}
				slots={{ transition: Fade }}
				anchorEl={anchorEl}
				open={open}
				data-open={open}
				onClose={handleCloseDropdown}
				aria-label='burger-menu-content'
				classes={{
					paper: 'bg-transparent z-50',
					list: 'bg-zinc-900 text-zinc-100 rounded-md px-4',
				}}>
				{navbarFields.map(({ borderBottom, name, path }) => (
					<NavbarRow
						onClick={handleCloseDropdown}
						hasBorderBottom={borderBottom}
						isBurgerMenu
						href={path}
						key={path}>
						{name}
					</NavbarRow>
				))}
			</Menu>
		</div>
	);
}
