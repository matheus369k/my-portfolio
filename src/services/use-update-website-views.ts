'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'
import { queryKeyOfViewsProjects } from './use-get-website-views'
dotenv.config()

export function useUpdateWebsiteViews() {
  return useMutation({
    mutationFn: async () => {
      return await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`,
      )
    },
    onSuccess: async (data, variables, onMutateResult, context) => {
      await context.client.invalidateQueries({
        queryKey: queryKeyOfViewsProjects,
      })
    },
  })
}
