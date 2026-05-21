'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { AlignJustify, X } from 'lucide-react';
import dynamic from 'next/dynamic';

type BurgerMenuProps = {
	navbarFields: {
		name: string;
		path: string;
		borderBottom: boolean;
	}[];
};

const BurgerMenuModelDynamic = dynamic(() => import('./burger-menu-model'), {
	ssr: false,
});

export function BurgerMenu({ navbarFields }: BurgerMenuProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	function handleClickDropDown(event: React.MouseEvent<HTMLElement>) {
		setAnchorEl(event.currentTarget);
	}

	const handleCloseDropdown = React.useCallback(() => {
		setAnchorEl(null);
	}, []);

	React.useEffect(() => {
		window.addEventListener('resize', handleCloseDropdown);
		return () => window.removeEventListener('resize', handleCloseDropdown);
	}, [handleCloseDropdown]);

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

			<BurgerMenuModelDynamic
				anchorEl={anchorEl}
				navbarFields={navbarFields}
				onCloseDropdown={handleCloseDropdown}
				open={open}
			/>
		</div>
	);
}
