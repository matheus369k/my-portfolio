import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/app/',
    '/src/@types/',
    '/src/styles/',
    '/src/templates/home/index.ts',
    '/src/templates/learn/index.ts',
    '/src/templates/projects/index.ts',
    '/src/templates/talk-me/index.ts',
    '/src/templates/about-me/index.ts',
  ],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironmentOptions: {
    url: 'http://localhost:3333',
  },
}

export default createJestConfig(config)
