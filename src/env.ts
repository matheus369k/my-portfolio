import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const schemaEnv = z.object({
    CV_LINK: z.string().url(),
    GITHUB_LINK: z.string().url(),
    LINKEDIN_LINK: z.string().url(),
    MAIL_LINK: z.string().url(),

    BACK_END_URL: z.string().url(),
})

export const env = schemaEnv.parse(process.env);