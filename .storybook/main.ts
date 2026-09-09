import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  features: {
    experimentalRSC: true,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs', 
    '@storybook/addon-a11y', 
    "msw-storybook-addon", 
    "@storybook/addon-themes", 
    '@storybook/addon-styling-webpack'
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
}
export default config
