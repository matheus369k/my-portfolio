import { renderHook } from '@testing-library/react';
import { useToggleMenu } from './use-toggle-menu';
import { act } from 'react';

describe('useToggleMenu()', () => {
	it('should run correctly', () => {
		const { result } = renderHook(useToggleMenu);
		expect(result.current.isMenuOpen).toBe(false);
	});

	it('should open menu when function is called and menu is closed', () => {
		const { result } = renderHook(useToggleMenu);
		act(() => result.current.handleToggleMenu());
		expect(result.current.isMenuOpen).toBe(true);
	});

	it('should closed menu when function is called and menu is open', () => {
		const { result } = renderHook(useToggleMenu);
		act(() => {
			result.current.handleToggleMenu();
			result.current.handleToggleMenu();
		});
		expect(result.current.isMenuOpen).toBe(false);
	});
});
