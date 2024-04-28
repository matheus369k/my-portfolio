import { useEffect, useState } from "react";
import { HardSkill } from "../../types/types";
import { featchJsonApi } from "../../service/get-datas";
import { Loading } from "../components/loading";

export function HardSkills() {
    const [getHardSkill, setHardSkill] = useState<HardSkill[]>();

    useEffect(() => { featchJsonApi("hardSkill", setHardSkill) }, [])

    return (
        <section id="hardSkills" className="flex flex-col py-5 pb-20 justify-center items-center h-screen max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-32">
                Habilidades Tecnicas
            </h2>
            <ul className="flex flex-wrap items-center gap-20 justify-center w-full">
                {getHardSkill
                    ? getHardSkill.map(hardSkill => (
                        <li key={hardSkill.name + "-" + hardSkill.id}>
                            <img
                                src={hardSkill.url}
                                alt={hardSkill.name}
                                title={hardSkill.name}
                                className="size-[100px]"
                            />
                        </li>
                    ))
                    : <Loading />
                }
            </ul>
        </section>
    )
}