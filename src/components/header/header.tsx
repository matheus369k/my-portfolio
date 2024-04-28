import { useState } from "react";
import { ButtonMode } from "./components/button-mode";
import { ListLink } from "./components/list-link";

export function Header() {
    const [DarkMode, setDarkMode] = useState(true);

    function switchThemeMode() {
        const htmlElememt = document.querySelector("html");

        setDarkMode(!DarkMode);

        htmlElememt.classList.toggle("dark");
    }
    return (
        <header id="header-container" className="h-[60px] w-full bg-[#626262] dark:bg-black text-white flex justify-between items-center px-5">
            <div className="flex gap-3">
                <i className="text-xl font-extrabold size-[50px] border border-gray-200 rounded-full text-center pt-2.5 cursor-default">M.G</i>
                <div className="flex justify-between w-24 h-12 border border-gray-800 rounded-3xl  bg-gray-950 text-white p-1">
                    <ButtonMode onClick={switchThemeMode} themer="dark" visible={DarkMode} />
                    <ButtonMode onClick={switchThemeMode} themer="light" visible={!DarkMode} />
                </div>
            </div>
            <nav>
                <ul className="flex justify-between w-[587px] font-bold text-gray-400">
                    <ListLink href="#home">Inicio</ListLink>
                    <ListLink href="#hardSkills">Habilidades</ListLink>
                    <ListLink href="#projects">Projetos</ListLink>
                    <ListLink href="#talk-me">Fale Comigo</ListLink>
                </ul>
            </nav>
        </header>
    )
}