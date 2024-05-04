import { useEffect, useState } from "react";
import { ProjectUseSkill } from "./components/project-use-skill";
import { Link } from "../components/link";
import { Button } from "../components/button";
import { MyProjects, PageStatus } from "../../types/types";
import { fetchJsonApi } from "../../service/get-datas";
import { SiSitepoint } from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { Loading } from "../components/loading";
import { Error } from "../components/error";

export function Projects() {
    const [getProjects, setProjects] = useState<MyProjects[]>();
    const [statePage, setStatePage] = useState<PageStatus>({
        loadStatus: "loading",
        showHide: false
    });

    useEffect(() => { fetchJsonApi("projects", setProjects, setStatePage) }, []);

    function showHiddenProjects() {
        setStatePage({
            ...statePage,
            showHide: !statePage.showHide
        })
    }

    return (
        <section
            id="projects"
            className="flex flex-col p-5 max-sm:px-2 gap-10 my-16 max-md:my-10 min-h-screen max-w-[1149px] mx-auto"
        >
            <h2 className="text-5xl max-sm:text-3xl mb-32 max-sm:mb-20  text-center">
                Projetos
            </h2>
            {statePage.loadStatus === "compleat" &&
                <>
                    <ul
                        className="flex flex-col max-sm:items-center mb-20 max-md:mb-5 w-full gap-24 [&>*:nth-child(even)]:self-end max-sm:[&>*:nth-child(even)]:self-center"
                    >
                        {
                            getProjects.map((project, index) => (
                                <li
                                    key={project.name}
                                    className={`flex flex-col gap-8 max-sm:gap-6 items-center max-w-[500px] w-full h-auto animate-pulse ${index > 1 && !statePage.showHide
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
                                        <Link href={project.links.deploy}>
                                            <Button type="button" title="Acessar o site"><SiSitepoint className="size-4 mr-1" />Site</Button>
                                        </Link>
                                        <Link href={project.links.repositorio}>
                                            <Button type="button" title="Acessar o repositorio"><MdStorage className="size-4 mr-1" />Repositorio</Button>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                    </ul>
                    <Button
                        onClick={() => showHiddenProjects()}
                    >
                        Mostrar {statePage.showHide ? "menos" : "mais"}
                    </Button>
                </>
            }
            {statePage.loadStatus === "loading" && <Loading />}
            {statePage.loadStatus === "error" && <Error />}

        </section>
    )
}