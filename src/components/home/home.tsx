import persona from "../../assets/persona.png";

export function Home() {
    return (
        <section id="home" className="flex justify-between items-center h-screen max-w-[1149px] mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className="flex flex-col gap-4">
                    <span
                        className="text-6xl text-center"
                    >
                        Desenvolvedor
                    </span>
                    <span
                        className="text-6xl text-center"
                    >
                        Web
                    </span>
                </h2>
                <ul className="m-auto flex gap-8">
                    <li className="font-bold border border-white bg-gray-100/10 rounded-3xl transition-all hover:bg-white hover:text-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <button className="h-10 px-10" >GitHub</button>
                        </a>
                    </li>
                    <li className="font-bold border border-white bg-gray-100/10 rounded-3xl transition-all hover:bg-white hover:text-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <button className="h-10 px-10" >Linkedin</button>
                        </a>
                    </li>
                    <li className="font-bold border border-white bg-gray-100/10 rounded-3xl transition-all hover:bg-white hover:text-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <button className="h-10 px-10" >Curriculo</button>
                        </a>
                    </li>
                </ul>
            </div>
            <img 
                src={persona} 
                alt="personagem" 
                className="w-1/3 max-h-[400px] max-w-[400px]"
            />
        </section>
    )

}
