export interface ProjectImageUrl {
  png: string
  gif: string
}

export interface ProjectType {
  _id: string
  name: string
  slug: string
  tools: string[]
  image_url: string
  links: {
    name: string
    link: string
  }[]
  description: string
  access_total: number
}

export interface Projects {
  projects: ProjectType[]
}
