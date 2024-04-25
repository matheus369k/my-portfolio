import { useEffect, useState } from "react";
import { ProjectUseSkill } from "./components/project-use-skill";
import { Link } from "../components/link";
import { Button } from "../components/button";
import { MyProjects } from "../../types/types";
import { featchJsonApi } from "../../service/get-datas";

export function Projects() {
    const [getProjects, setProjects] = useState<MyProjects[]>();

    useEffect(() => {featchJsonApi("projects", setProjects)}, []);

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
                            className={`flex flex-col gap-8 items-center max-w-[500px] h-auto ${index > 1 ? "hidden" : ""}`}
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
                            <div className="flex gap-5 text-1xl leading-8">
                                <Link>
                                    <Button>Site</Button>
                                </Link>
                                <Link>
                                    <Button>Repositorio</Button>
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Button moreProjects>Mostrar mais</Button>
        </section>
    )
}