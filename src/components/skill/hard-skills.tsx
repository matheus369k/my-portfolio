import { useEffect, useState } from "react";
import { HardSkill } from "../../types/types";
import { featchJsonApi } from "../../service/get-datas";
import { Loading } from "../components/loading";

export function HardSkills() {
    const [getHardSkill, setHardSkill] = useState<HardSkill[]>();

    useEffect(() => { featchJsonApi("hardSkill", setHardSkill) }, [])

    return (
        <section
            id="hardSkills"
            className="flex flex-col p-5 my-16 max-md:my-10 justify-center items-center min-h-screen max-w-[1149px] mx-auto"
        >
            <h2 className="text-5xl max-sm:text-4xl mb-32 max-sm:mb-20">
                Habilidades Tecnicas
            </h2>
            <ul
                className="flex flex-wrap items-center max-md:gap-10 gap-20 justify-center w-full"
            >
                {getHardSkill
                    ? getHardSkill.map(hardSkill => (
                        <li key={hardSkill.name + "-" + hardSkill.id}>
                            <img
                                src={hardSkill.url}
                                alt={hardSkill.name}
                                title={hardSkill.name}
                                className="size-[100px] max-md:size-[80px]"
                            />
                        </li>
                    ))
                    : <Loading />
                }
            </ul>
        </section>
    )
}