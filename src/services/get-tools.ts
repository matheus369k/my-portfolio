'use server'

import type { Tools } from '@/@types'
import { fetchAPI } from '@/lib/axios'

export async function getTools() {
  try {
    const response = await fetchAPI.get('/tools')
    const data: Tools = await response.data

    return {
      ...data,
    }
  } catch (error) {
    console.log((error as Error).message)
    return {
      tools: {
        front_end: [],
        back_end: [],
        another: [],
      },
    } as Tools
  }
}
