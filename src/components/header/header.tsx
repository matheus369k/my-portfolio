import { ButtonMode } from "./components/button-mode";
import { ListLink } from "./components/list-link";

export function Header() {
    return (
        <header className="h-[70px] w-full bg-black text-white flex justify-between items-center px-5">
            <div className="flex gap-3">
                <i className="text-xl font-extrabold size-[50px] border border-gray-200 rounded-full text-center pt-2.5">M.G</i>
                <div className="flex w-24 h-12 border border-gray-800 rounded-3xl bg-gray-950 text-white">
                    <ButtonMode themer="dark" visible/>
                    <ButtonMode themer="light" />
                </div>
            </div>
            <nav>
                <ul className="flex justify-between w-[587px] font-bold text-gray-500">
                    <ListLink href="#home" visible>Inicio</ListLink>
                    <ListLink href="#hardSkills">Habilidades</ListLink>
                    <ListLink href="#projects">Projetos</ListLink>
                    <ListLink href="#talk-me">Fale Comigo</ListLink>
                </ul>
            </nav>
        </header>
    )
}