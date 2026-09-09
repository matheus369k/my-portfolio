import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Preview } from '@storybook/nextjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from 'storybook/theming';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/styles/globals.css';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
	loaders: [mswLoader],
	decorators: [
		withThemeByClassName({
			themes: {
				dark: 'dark',
			},
			defaultTheme: 'dark',
			parentSelector: 'html',
		}),
		(Story) => (
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				<div id='__next' className='text-zinc-100 bg-zinc-900'>
					{Story()}
				</div>
			</AppRouterCacheProvider>
		),
	],
	parameters: {
		layout: 'fullscreen',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: {
				...themes.dark,
				textColor: '#f4f4f5',
				appContentBg: '#18181b',
			},
		},
	},
	tags: ['autodocs'],
};

export default preview;
