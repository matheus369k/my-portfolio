import react from "../../assets/svgs/react.svg"
import pokedex from "../../assets/project-1.webp"
import axios from "axios"
import { useEffect, useState } from "react";
import { ProjectUseSkill } from "./components/project-use-skill";

interface MyProjects {
    id: number
    name: string
    url: string
    description: string
    skills: {url: string, name: string}[]
    links: { repositorio: string, deploy: string }
}

export function Projects() {
    const [getProjects, setProjects] = useState<MyProjects[]>();

    useEffect(() => {
        axios.get("./src/data/portfolio.json")
            .then((response) => {
                setProjects(response.data.projects);
            }, (reject) => {
                console.log("ERROR:", reject)
            })
    }, [])

    return (
        <section id="projects" className="flex flex-col gap-10 mb-20 min-h-screen max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-32 text-center">
                Projetos
            </h2>
            <ul className="flex flex-col mb-20 w-full gap-24 [&>*:nth-child(even)]:self-end">
                {getProjects &&
                    getProjects.map((project, index) => (
                        <li
                            key={project.name}
                            className={`flex flex-col gap-8 items-center max-w-[500px] h-auto ${index > 1 ? "hidden": ""}`}
                        >
                            <img
                                src={project.url}
                                alt="tools"
                                className="max-w-[500px] h-auto"
                            />
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p className="tracking-wider shadow-sm shadow-black/10">{project.description}</p>
                            <ul className="flex gap-10">
                                <ProjectUseSkill Skills={project.skills} />
                            </ul>
                            <div className="flex gap-5 text-2xl leading-8">
                                <a href={project.links.deploy} target="_blank">
                                    <button className="bg-white/10 px-10 h-14 border border-white rounded-3xl transition-all hover:bg-white hover:text-black" type="button">Site</button>
                                </a>
                                <a href={project.links.repositorio} target="_blank" >
                                    <button className="bg-white/10 px-10 h-14 border border-white rounded-3xl transition-all hover:bg-white hover:text-black" type="button">Repositorio</button>
                                </a>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button className="bg-white/10 px-10 w-max m-auto h-14 border border-white rounded-3xl transition-all hover:bg-white hover:text-black" type="button">Mostrar mais</button>
        </section>
    )
}