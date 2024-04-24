interface ProjectsSkillsProps {
    Skills: { url: string, name: string}[]
}

export function ProjectUseSkill({Skills}:ProjectsSkillsProps) {
    return (
        <>
            {Skills &&
                Skills.map(skill => (
                    <li key={skill.name}>
                        <img
                            src={skill.url}
                            alt={skill.name}
                            className="size-[40px]"
                        />
                    </li>
                ))

            }
        </>
    )
}