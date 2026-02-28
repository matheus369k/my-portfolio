import { fetchAPI } from '@/lib/axios'
import { inviteMail } from './invite-mail'
import axiosMockAdapter from 'axios-mock-adapter'

describe('inviteMail()', () => {
  const fetchApi = new axiosMockAdapter(fetchAPI)
  it('should return status ok', async () => {
    fetchApi.onPost('/invite-email').replyOnce(201, 'ok')

    const response = await inviteMail({
      from_name: 'test',
      email: 'test@gmail.com',
      message: 'test',
    })

    expect(response).toEqual({
      status: 'ok',
    })
  })

  it('should return status error', async () => {
    fetchApi.onPost('/invite-email').replyOnce(400, 'bad error')

    const response = await inviteMail({
      from_name: 'test',
      email: 'test@gmail.com',
      message: 'test',
    })

    expect(response).toEqual({
      status: 'error',
    })
  })
})
