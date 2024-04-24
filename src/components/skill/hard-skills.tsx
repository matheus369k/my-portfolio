import react from "../../assets/svgs/react.svg"

export function HardSkills() {
    return (
        <section id="hardSkills" className="flex flex-col justify-center items-center h-screen max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-32">
                Habilidades Tecnicas
            </h2>
            <ul className="flex flex-wrap items-center gap-20 justify-center w-full">
                {
                    Array.from({ length: 10 }).map((_, index)=>(
                        <li key={index+"Tools"}>
                            <img 
                                src={react} 
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