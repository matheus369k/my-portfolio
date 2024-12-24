'use client';

import { useState } from 'react';

export function useToggleMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleOpenCloseMenu() {
		setIsMenuOpen((state) => {
			return !state;
		});
	}

	return {
		isMenuOpen,
		handleOpenCloseMenu,
	};
}
