import mockAxiosAdapter from 'axios-mock-adapter'
import { getTools } from './get-tools'
import { fetchAPI } from '@/lib/axios'
import type { Tools } from '@/@types'

const mockApi = new mockAxiosAdapter(fetchAPI)

describe('getCertificates()', () => {
  const { tools }: Tools = {
    tools: {
      front_end: [
        {
          _id: '1',
          name: 'React',
          svg_url: 'https://example.com/react.svg',
        },
        {
          _id: '2',
          name: 'Vue',
          svg_url: 'https://example.com/vue.svg',
        },
      ],
      back_end: [
        {
          _id: '3',
          name: 'Node.js',
          svg_url: 'https://example.com/nodejs.svg',
        },
        {
          _id: '4',
          name: 'Express',
          svg_url: 'https://example.com/express.svg',
        },
      ],
      another: [
        {
          _id: '5',
          name: 'MongoDB',
          svg_url: 'https://example.com/mongodb.svg',
        },
        {
          _id: '6',
          name: 'PostgreSQL',
          svg_url: 'https://example.com/postgresql.svg',
        },
      ],
    },
  }

  it('should run correctly', async () => {
    mockApi.onGet('/tools').reply(200, {
      tools: tools,
    })
    const result = await getTools()
    expect(result.tools).toMatchObject(tools)
  })

  it("shouldn't break if the api doesn't return a response", async () => {
    mockApi.onGet('/tools').reply(400)
    const result = await getTools()
    expect(result.tools).toEqual({
      front_end: [],
      back_end: [],
      another: [],
    })
  })
})
