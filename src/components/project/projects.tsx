import { useEffect, useState } from "react";
import { ProjectUseSkill } from "./components/project-use-skill";
import { Link } from "../components/link";
import { Button } from "../components/button";
import { MyProjects } from "../../types/types";
import { featchJsonApi } from "../../service/get-datas";
import { SiSitepoint } from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { Loading } from "../components/loading";

export function Projects() {
    const [getProjects, setProjects] = useState<MyProjects[]>();
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => { featchJsonApi("projects", setProjects) }, []);

    function showHiddenProjects() {
        setShowAll(!showAll)
    }

    return (
        <section
            id="projects"
            className="flex flex-col p-5 gap-10 my-16 max-md:my-10 min-h-screen max-w-[1149px] mx-auto"
        >
            <h2 className="text-5xl max-sm:text-4xl mb-32 max-sm:mb-20  text-center">
                Projetos
            </h2>
            <ul
                className="flex flex-col mb-20 w-full gap-24 [&>*:nth-child(even)]:self-end"
            >
                {getProjects
                    ? getProjects.map((project, index) => (
                        <li
                            key={project.name}
                            className={`flex flex-col gap-8 max-sm:gap-6 items-center max-w-[500px] w-full h-auto animate-pulse ${index > 1 && !showAll
                                ? "hidden"
                                : ""
                                }`}
                        >
                            <img
                                src={project.url}
                                alt={project.name}
                                className="max-w-[500px] w-full h-auto"
                            />
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p className="tracking-wide">{project.description}</p>
                            <ul className="flex gap-10">
                                <ProjectUseSkill Skills={project.skills} />
                            </ul>
                            <div className="flex gap-5 text-1xl leading-8">
                                <Link>
                                    <Button type="button" title="Acessar o site"><SiSitepoint className="size-4 mr-1" />Site</Button>
                                </Link>
                                <Link>
                                    <Button type="button" title="Acessar o repositorio"><MdStorage className="size-4 mr-1" />Repositorio</Button>
                                </Link>
                            </div>
                        </li>
                    ))
                    : <Loading />
                }
            </ul>
            <Button
                onClick={() => showHiddenProjects()}
            >
                Mostrar {showAll ? "menos" : "mais"}
            </Button>
        </section>
    )
}