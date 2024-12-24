import { env } from "./env"

describe('env', () => {
    it('should receive correct environed var', () => {
        expect(env).toMatchObject({
            NEXT_PUBLIC_BACK_END_URL: 'http://localhost:3000',
            NEXT_PUBLIC_CV_LINK: "https://localhost:8000/media/cv.pdf",
            NEXT_PUBLIC_GITHUB_LINK: "https://github.com/username",
            NEXT_PUBLIC_LINKEDIN_LINK: "https://www.linkedin.com/in/username-id",
            NEXT_PUBLIC_MAIL_LINK: "https://gmailto:useremail@gmail.com",
        })
    })
})