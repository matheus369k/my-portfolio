import { useEffect, useState } from "react";
import axios from "axios";

interface HardSkill {
    id: number
    name: string
    url: string
}

export function HardSkills() {
    const [getHardSkill, setHardSkill] = useState<HardSkill[]>();

    useEffect(() => {
        axios.get("./src/data/portfolio.json")
            .then((response) => {
                setHardSkill(response.data.hardSkill);
            }, (reject) => {
                console.log("ERROR:", reject)
            })
    }, [])

    return (
        <section id="hardSkills" className="flex flex-col mb-20 justify-center items-center h-screen max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-32">
                Habilidades Tecnicas
            </h2>
            <ul className="flex flex-wrap items-center gap-20 justify-center w-full">
                {getHardSkill &&
                    getHardSkill.map(hardSkill=>(
                        <li key={hardSkill.name+"-"+hardSkill.id}>
                            <img 
                                src={hardSkill.url} 
                                alt="tools"
                                className="size-[100px]"
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}