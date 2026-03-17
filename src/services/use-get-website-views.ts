'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export type WebsiteViewsResponse = {
  views: number
  createAt: string
}

const refreshInFiveMinutes = 1000 * 60 * 5
export const queryKeyOfViewsProjects = ['views-website']
export function useGetWebsiteViews() {
  return useQuery({
    queryKey: queryKeyOfViewsProjects,
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`,
      )
      return response.data[0] as WebsiteViewsResponse
    },
    refetchInterval: refreshInFiveMinutes,
  })
}
