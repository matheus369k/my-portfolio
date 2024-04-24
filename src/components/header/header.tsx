import moon from "../../assets/svgs/moon.svg";
import sun from "../../assets/svgs/sun.svg";

export function Header() {
    return (
        <header className="h-[70px] w-full bg-black text-white flex justify-between items-center px-5">
            <div className="flex gap-3">
                <i className="text-xl font-extrabold size-[50px] border border-gray-200 rounded-full text-center pt-2.5">M.G</i>
                <div className="flex w-24 h-12 border border-gray-800 rounded-3xl bg-gray-950 text-white">
                    <button title="Dark Themer">
                        <img
                            src={moon}
                            alt="icon dark Themer"
                            className="size-12"
                        />
                    </button>
                    <button title="Light Themer">
                        <img
                            src={sun}
                            alt="icon light Themer"
                            className="size-12 invisible"
                        />
                    </button>
                </div>
            </div>
            <nav className="">
                <ul className="flex justify-between w-[587px] font-bold text-gray-500">
                    <li className="text-gray-200">
                        <a href="#home" target="_parent" rel="noopener noreferrer">Inicio</a>
                    </li>
                    <li>
                        <a href="#hardSkills" target="_parent" rel="noopener noreferrer">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects" target="_parent" rel="noopener noreferrer">Projetos</a>
                    </li>
                    <li>
                        <a href="#talk-me" target="_parent" rel="noopener noreferrer">Fale Comigo</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}