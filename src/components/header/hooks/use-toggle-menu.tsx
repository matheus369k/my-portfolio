'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function useToggleMenu() {
	const pathName = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathRef = useRef(pathName);

	function handleToggleMenu() {
		setIsMenuOpen((state) => {
			return !state;
		});
	}

	useEffect(() => {
		if (pathRef.current !== pathName) {
			setIsMenuOpen(false);
			pathRef.current = pathName;
		}
	}, [pathName]);

	return {
		isMenuOpen,
		handleToggleMenu,
	};
}
