'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type WebsiteViewsResponse = {
  accessTotal: number
  createAt: string
}

const refreshInOneHour = 1000 * 60 * 60
export const queryKeyOfViewsProjects = ['views-website']
export function useGetWebsiteViews() {
  return useQuery({
    queryKey: queryKeyOfViewsProjects,
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`,
      )
      return response.data as WebsiteViewsResponse
    },
    refetchInterval: refreshInOneHour,
  })
}
