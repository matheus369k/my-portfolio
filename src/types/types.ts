export interface MyProjects {
    id: number
    name: string
    url: string
    description: string
    skills: { url: string, name: string }[]
    links: { repositorio: string, deploy: string }
}

export interface HardSkill {
    id: number
    name: string
    url: string
}