export interface Certificate {
  title: string
  description: string
  link: string
  emission_data: string
  order: number
}

export interface Certificates {
  certificates: Certificate[]
}

export type LimiteCertificates = 'min' | 'max'

export interface Tool {
  _id: string
  name: string
  svg_url: string
}

export interface Tools {
  tools: {
    front_end: Tool[]
    back_end: Tool[]
    another: Tool[]
  }
}
