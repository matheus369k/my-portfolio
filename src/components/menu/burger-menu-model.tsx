'use client';

import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { NavbarRow } from '../ui/navbar-row';

type BurgerMenuProps = {
	anchorEl: null | HTMLElement;
	onCloseDropdown: () => void;
	open: boolean;
	navbarFields: {
		name: string;
		path: string;
		borderBottom: boolean;
	}[];
};

export default function BurgerMenuModel(props: BurgerMenuProps) {
	const { navbarFields, onCloseDropdown, anchorEl, open } = props;

	function renderMenuItemsUI() {
		return navbarFields.map(({ borderBottom, name, path }) => (
			<NavbarRow
				onClick={onCloseDropdown}
				hasBorderBottom={borderBottom}
				isBurgerMenu
				href={path}
				key={path}>
				{name}
			</NavbarRow>
		));
	}

	return (
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
			onClose={onCloseDropdown}
			aria-label='burger-menu-content'
			classes={{
				paper: 'bg-transparent z-50',
				list: 'bg-zinc-900 text-zinc-100 rounded-md px-4',
			}}>
			{renderMenuItemsUI()}
		</Menu>
	);
}
