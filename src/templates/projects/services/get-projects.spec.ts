import { getProjects } from './get-projects'
import axiosMockAdapter from 'axios-mock-adapter'
import { faker } from '@faker-js/faker/locale/pt_BR'
import { renderHook } from '@testing-library/react'
import { fetchAPI } from '@/lib/axios'

describe('getProjects()', () => {
  const fetchApi = new axiosMockAdapter(fetchAPI)
  const fakerDatas = Array.from({ length: 4 }).map(() => {
    return {
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

  it('should return projects', async () => {
    fetchApi.onGet('/projects').replyOnce(200, { projects: fakerDatas })
    const { result } = renderHook(getProjects)
    const { projects } = await result.current

    expect(projects).toMatchObject(fakerDatas)
  })

  it('should call fetchAPI and return undefine', async () => {
    const MockConsole = jest.spyOn(console, 'log')
    fetchApi.onGet('/projects').replyOnce(200, undefined)
    const { result } = renderHook(getProjects)
    const { projects } = await result.current

    expect(projects).toBeNull()
    expect(MockConsole).toHaveBeenCalled()
  })
})
