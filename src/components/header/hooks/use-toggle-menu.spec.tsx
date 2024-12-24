'use client';

import { renderHook } from '@testing-library/react';
import { useToggleMenu } from './use-toggle-menu';
import { act } from 'react';

describe('useToggleMenu()', () => {
	it('should correct initial state', () => {
		const { result } = renderHook(useToggleMenu);

		expect(result.current.isMenuOpen).toBeFalsy();
	});

	it('should open menu when call the function handleOpenCloseMenu for first time', () => {
		const { result } = renderHook(useToggleMenu);

		act(() => result.current.handleOpenCloseMenu());

		expect(result.current.isMenuOpen).toBeTruthy();
	});

	it('should close menu when function for call two time', () => {
		const { result } = renderHook(useToggleMenu);

		act(() => {
			result.current.handleOpenCloseMenu();
			result.current.handleOpenCloseMenu();
		});

		expect(result.current.isMenuOpen).toBeFalsy();
	});
});
