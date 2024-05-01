import { render, fireEvent } from "@testing-library/react";
import { Header } from "./header";

const updateComponent = (isDarkMode: boolean) => {
    global.window.matchMedia = jest.fn().mockReturnValue({ matches: isDarkMode });
    render(<Header />);
}

describe("Header", () => {
    const htmlElement = document.querySelector("html");

    beforeEach(() => {
        updateComponent(true);
        window.localStorage.removeItem("ThemeMode");
    });

    test("Test function detectedBrowserTheme", () => {

        expect(htmlElement.classList.value).toBe("dark");

        updateComponent(false);

        expect(htmlElement.classList.value).not.toBe("dark");
    });
    test("Test function switchThemeMode", () => {
        const btnToggleTheme = document.getElementById("toggle-theme");
        const browserStorage = window.localStorage;

        expect(browserStorage.ThemeMode).toBeUndefined();
        
        fireEvent.click(btnToggleTheme);
        expect(browserStorage.ThemeMode).toBe("dark");
        expect(htmlElement.classList.value).toBe("dark");

        updateComponent(false);

        fireEvent.click(btnToggleTheme);
        expect(browserStorage.ThemeMode).toBe("light");
        expect(htmlElement.classList.value).not.toBe("dark");
    });
    test("test function openCloseMenu", () => {
        const btnToggleMenu = document.getElementById("toggle-menu");
        const navbar = document.getElementById("navbar-container");
        global.window.innerWidth = 500;

        expect(navbar.classList).toContain("max-sm:hidden");

        fireEvent.click(btnToggleMenu);
        expect(navbar.classList).not.toContain("max-sm:hidden");

        fireEvent.click(btnToggleMenu);
        expect(navbar.classList).toContain("max-sm:hidden");
    });
})
