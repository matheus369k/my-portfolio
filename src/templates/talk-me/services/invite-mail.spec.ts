'use client';

import { mock } from "node:test";
import { inviteMail } from "./invite-mail";

const mockPost = jest.fn()

jest.mock('@/lib/axios', () => ({
    fetchAPI: {
        post: (pathName: string, body: object) => mockPost(pathName, body)
    }
}))

describe('inviteMail()', () => {
    it('should return status ok', async () => {
        mockPost.mockResolvedValueOnce({
            status: 200
        })

        const response = await inviteMail({
            from_name: 'test',
            email: 'test@gmail.com',
            message: 'test'
        })

        expect(response).toEqual({
            status: 'ok'
        })
    })

    it('should return status error', async () => {
        mockPost.mockRejectedValueOnce({
            status: 400
        })

        const response = await inviteMail({
            from_name: 'test',
            email: 'test@gmail.com',
            message: 'test'
        })

        expect(response).toEqual({
            status: 'error'
        })
    })

    it('should call fetchAPI.post with correct data and pathName', async () => {
        mockPost.mockResolvedValueOnce({
            status: 200
        })
        
        await inviteMail({
            from_name: 'test',
            email: 'test@gmail.com',
            message: 'test'
        })

        expect(mockPost).toHaveBeenCalledWith('/invite-email', {
            from_name: 'test',
            email: 'test@gmail.com',
            message: 'test'
        })
    })
})