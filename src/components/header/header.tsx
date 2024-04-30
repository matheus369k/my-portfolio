import { useState } from "react";
import { ButtonMode } from "./components/button-mode";
import { ListLink } from "./components/list-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

interface StateControl {
    darkMode?: boolean
    menuOpen?: boolean
}

export function Header() {
    const [stateControl, setStateControl] = useState<StateControl>({
        darkMode: true,
        menuOpen: false
    });

    function switchThemeMode() {
        const htmlElememt = document.querySelector("html");

        setStateControl({
            ...stateControl,
            darkMode: !stateControl.darkMode
        });

        htmlElememt.classList.toggle("dark");
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
                    className="flex justify-between w-24 h-12 border border-gray-800 rounded-3xl  bg-gray-950 text-white p-1"
                >
                    <ButtonMode
                        onClick={() => switchThemeMode()}
                        themer="dark"
                        visible={stateControl.darkMode}
                    />
                    <ButtonMode
                        onClick={() => switchThemeMode()}
                        themer="light"
                        visible={!stateControl.darkMode}
                    />
                </div>
            </div>
            <nav
                className="bg-[#626262] dark:bg-black flex gap-5 flex-col items-end justify-end rounded-l-lg z-10 max-sm:px-5 max-sm:py-2 max-sm:absolute max-sm:top-0 max-sm:right-0"
            >
                <button
                    type="button"
                    title="menu"
                    onClick={() => openCloseMenu()}
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