import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker/locale/pt_BR';

const query = new QueryClient();

const meta = {
	title: 'Components/Header',
	component: Header,
	decorators(Story) {
		return (
			<QueryClientProvider client={query}>
				<div className='h-40'>{Story()}</div>
			</QueryClientProvider>
		);
	},
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;
export default meta;

export const HomePage: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/',
			},
		},
		msw: {
			handlers: [
				http.get(
					`${process.env.NEXT_PUBLIC_BACK_END_URL}/website-views`,
					() => {
						return HttpResponse.json({
							accessTotal: faker.number.int({ min: 500, max: 2000 }),
							createAt: faker.date.past(),
						});
					},
				),
			],
		},
	},
};

export const ProjectPage: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/projects/all',
			},
		},
		msw: {
			handlers: [],
		},
	},
};

export const AnotherPage: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/tools',
			},
		},
		msw: {
			handlers: [],
		},
	},
};

export const MobilePage: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/tools',
			},
		},
		msw: {
			handlers: [],
		},
	},
	afterEach({ canvasElement }) {
		canvasElement
			.querySelector('[aria-label=burger-navbar-menu]')
			?.classList.remove('md:hidden');
		canvasElement
			.querySelector('[aria-label=desktop-navbar-menu]')
			?.classList.remove('md:flex');
	},
};
