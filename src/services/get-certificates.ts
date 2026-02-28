'use server'

import type { Certificates } from '@/@types'
import { fetchAPI } from '@/lib/axios'

export async function getCertificates() {
  try {
    const response = await fetchAPI.get('/certificates')
    const data: Certificates = await response.data

    return {
      ...data,
    }
  } catch (error) {
    console.log((error as Error).message)
    return {
      certificates: [],
    } as Certificates
  }
}
