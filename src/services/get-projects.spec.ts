import { getProjects } from './get-projects'
import axiosMockAdapter from 'axios-mock-adapter'
import { faker } from '@faker-js/faker/locale/pt_BR'
import { renderHook } from '@testing-library/react'
import { fetchAPI } from '@/lib/axios'

describe('getProjects request', () => {
  const fetchApi = new axiosMockAdapter(fetchAPI)
  const requestUrl = '/projects?type=all'
  const fakerDatas = Array.from({ length: 4 }).map(() => {
    return {
      access_total: faker.number.int(),
      _id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      slug: faker.company.name().replace(' ', '-').toLocaleLowerCase(),
      tools: Array.from({ length: 5 }).map(() => {
        return faker.company.buzzPhrase()
      }),
      image_url: faker.image.url(),
      links: {
        deploy: faker.internet.url(),
        repository: faker.internet.url(),
      },
      description: faker.company.catchPhraseDescriptor(),
    }
  })

  it('returned projects data', async () => {
    fetchApi.onGet(requestUrl).replyOnce(200, { projects: fakerDatas })
    const { result } = renderHook(getProjects)
    const { projects } = await result.current

    expect(projects).toMatchObject(fakerDatas)
  })

  it('call fetchAPI and return array empty', async () => {
    const MockConsole = jest.spyOn(console, 'log')
    fetchApi.onGet(requestUrl).replyOnce(200, undefined)
    const { result } = renderHook(getProjects)
    const { projects } = await result.current

    expect(projects).toEqual([])
    expect(MockConsole).toHaveBeenCalled()
  })
})
