import { useEffect, useState } from "react";
import { ButtonMode } from "./components/button-mode";
import { ListLink } from "./components/list-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

interface StateControl {
    darkMode?: boolean | null
    menuOpen?: boolean
}

export function Header() {
    const [stateControl, setStateControl] = useState<StateControl>({
        darkMode: null,
        menuOpen: false
    });

    useEffect(() => { detectedBrowserTheme() }, [])

    function detectedBrowserTheme() {
        const idDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const storageThemeMode = window.localStorage.ThemeMode;

        if (!stateControl.darkMode && !storageThemeMode) {
            setStateControl({
                ...stateControl,
                darkMode: idDarkMode
            });

            switchThemeMode(idDarkMode);
            return;
        }

        switchThemeMode(storageThemeMode === "dark")
    }
    function switchThemeMode(isDarkMode: boolean) {
        const htmlElement = document.querySelector("html");

        setStateControl({
            ...stateControl,
            darkMode: isDarkMode
        });

        window.localStorage.setItem("ThemeMode", isDarkMode ? "dark": "light");

        if(isDarkMode) {
            htmlElement.classList.add("dark");
            return;
        }

        htmlElement.classList.remove("dark");
    }
    function openCloseMenu() {
        setStateControl({
            ...stateControl,
            menuOpen: !stateControl.menuOpen
        });
    }
    return (
        <header
            id="header-container"
            className="relative h-[60px] w-full bg-[#626262] dark:bg-black text-white flex justify-between items-center px-5"
        >
            <div className="flex gap-3">
                <i
                    className="text-xl font-extrabold size-[50px] border border-gray-200 rounded-full text-center pt-2.5 cursor-default"
                >
                    M.G
                </i>
                <div
                    onClick={() => switchThemeMode(!stateControl.darkMode)}
                    className="flex justify-between w-24 h-12 border border-gray-800 rounded-3xl  bg-gray-950 text-white p-1"
                >
                    <ButtonMode
                        
                        themer="dark"
                        visible={stateControl.darkMode}
                    />
                    <ButtonMode
                        themer="light"
                        visible={!stateControl.darkMode}
                    />
                </div>
            </div>
            <nav
                className="max-sm:bg-[#626262] max-sm:dark:bg-black max-sm:flex max-sm:gap-5 max-sm:flex-col max-sm:items-end max-sm:justify-end max-sm:rounded-l-lg max-sm:z-10 max-sm:px-5 max-sm:py-2 max-sm:absolute max-sm:top-0 max-sm:right-0"
            >
                <button
                    type="button"
                    title="menu"
                    onClick={() => openCloseMenu()}
                    className="hidden max-sm:block"
                >
                    {stateControl.menuOpen
                        ? <GrClose className="hidden max-sm:block size-10" />
                        : <RxHamburgerMenu className="hidden max-sm:block size-10" />
                    }
                </button>
                <ul
                    className={`flex gap-5 justify-between max-w-[400px] w-screen font-bold text-gray-400 max-sm:flex-col max-sm:w-max ${stateControl.menuOpen ? "flex" : "max-sm:hidden"}`}
                >
                    <ListLink href="#home">Inicio</ListLink>
                    <ListLink href="#hardSkills">Habilidades</ListLink>
                    <ListLink href="#projects">Projetos</ListLink>
                    <ListLink href="#talk-me">Fale Comigo</ListLink>
                </ul>
            </nav>
        </header>
    )
}