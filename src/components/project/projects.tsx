import react from "../../assets/svgs/react.svg"
import pokedex from "../../assets/project-1.webp"

export function Projects() {
    return (
        <section id="projects" className="flex flex-col min-h-screen max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-32 text-center">
                Projetos
            </h2>
            <ul className="flex gap-24 overflow-x-scroll snap-mandatory snap-x">
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <li
                            key={index + "Tools"}
                            className="max-w-[500px] h-auto snap-center snap-always"
                        >
                            <img
                                src={pokedex}
                                alt="tools"
                                className="max-w-[500px] h-auto"
                            />
                            <h3>Pokedex</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officiis consectetur exercitationem nostrum nihil architecto maxime eius earum, temporibus nisi, sit provident rem placeat beatae commodi dolorem corporis minima adipisci!</p>
                            <ul className="flex gap-10">
                                <li>
                                    <img
                                        src={react}
                                        alt="react"
                                        className="size-[40px]"
                                    /></li>
                                <li>
                                    <img
                                        src={react}
                                        alt="react"
                                        className="size-[40px]"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={react}
                                        alt="react"
                                        className="size-[40px]"
                                    />
                                </li>
                            </ul>
                            <div>
                                <button type="button">Site</button>
                                <button type="button">Repositorio</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}