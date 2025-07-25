import dotenv from 'dotenv'
import { z } from 'zod'
dotenv.config()

export const schemaEnv = z.object({
  NEXT_PUBLIC_CV_LINK: z.string().url(),
  NEXT_PUBLIC_GITHUB_LINK: z.string().url(),
  NEXT_PUBLIC_LINKEDIN_LINK: z.string().url(),
  NEXT_PUBLIC_MAIL_LINK: z.string().url(),

  NEXT_PUBLIC_BACK_END_URL: z.string().url(),
})

export const env = schemaEnv.parse(process.env)
