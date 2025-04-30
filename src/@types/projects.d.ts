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
    deploy: string
    repository: string
  }
  description: string
}

export interface Projects {
  projects: ProjectType[]
}
