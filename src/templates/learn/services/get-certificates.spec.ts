import mockAxiosAdapter from 'axios-mock-adapter'
import { getCertificates } from './get-certificates'
import { fetchAPI } from '@/lib/axios'
import type { Certificate } from '@/@types'

const mockApi = new mockAxiosAdapter(fetchAPI)

describe('getCertificates()', () => {
  const defaultResponse: Certificate[] = [
    {
      title: 'Certificate 1',
      description: 'Description 1',
      link: 'https://example.com/certificate1',
      emission_data: '2022-01-01',
      order: 1,
    },
    {
      title: 'Certificate 2',
      description: 'Description 2',
      link: 'https://example.com/certificate2',
      emission_data: '2022-02-01',
      order: 2,
    },
  ]

  it('should run correctly', async () => {
    mockApi.onGet('/certificates').reply(200, {
      certificates: defaultResponse,
    })
    const result = await getCertificates()
    expect(result.certificates).toMatchObject(defaultResponse)
  })

  it("shouldn't break if the api doesn't return a response", async () => {
    mockApi.onGet('/certificates').reply(400)
    const result = await getCertificates()
    expect(result.certificates).toEqual([])
  })
})
