import { useEffect, useState } from "react";
import { HardSkill, PageStatus } from "../../types/types";
import { fetchJsonApi } from "../../service/get-datas";
import { Loading } from "../components/loading";
import { Error } from "../components/error";

export function HardSkills() {
    const [getHardSkill, setHardSkill] = useState<HardSkill[]>();
    const [statusPage, setstatusPage] = useState<PageStatus>({ loadStatus: "loading" });

    useEffect(() => { fetchJsonApi("hardSkill", setHardSkill, setstatusPage) }, [])

    return (
        <section
            id="hardSkills"
            className="flex flex-col p-5 max-sm:px-2 my-16 max-md:my-10 items-center min-h-screen max-w-[1149px] mx-auto"
        >
            <h2 className="text-5xl max-sm:text-3xl mb-32 max-sm:mb-20">
                Habilidades Tecnicas
            </h2>
            <ul
                className="flex flex-wrap items-center max-md:gap-10 gap-20 justify-center w-full"
            >
                {statusPage.loadStatus === "compleat" &&
                    getHardSkill.map(hardSkill => (
                        <li
                            title={hardSkill.name} 
                            key={hardSkill.name + "-" + hardSkill.id}
                        >
                            <img
                                src={hardSkill.url}
                                alt={hardSkill.name}
                                className="size-[100px] max-md:size-[80px]"
                            />
                        </li>
                    ))
                }
                {statusPage.loadStatus === "loading" && <Loading />}
                {statusPage.loadStatus === "error" && <Error />}
            </ul>
        </section>
    )
}