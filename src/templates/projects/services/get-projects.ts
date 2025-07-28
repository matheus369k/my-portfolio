'use server'

import type { Projects } from '@/@types'
import { fetchAPI } from '@/lib/axios'

export async function getProjects() {
  try {
    const response = await fetchAPI.get('/projects')
    const data: Projects = await response.data

    if (!data) {
      throw new Error('Error to request project datas...')
    }

    return {
      ...data,
    }
  } catch (error) {
    console.log(error)
    return { projects: null }
  }
}
