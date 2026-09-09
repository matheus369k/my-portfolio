import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ViewsOfWebsite } from './views-of-website';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { http, HttpResponse } from 'msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const query = new QueryClient();

const meta = {
	title: 'Components/ViewsOfWebsite',
	component: ViewsOfWebsite,
	decorators(Story) {
		return (
			<QueryClientProvider client={query}>
				<div className='h-12 relative'>
					<div className='absolute -top-24 left-1/2'>{Story()}</div>
				</div>
			</QueryClientProvider>
		);
	},
} satisfies Meta<typeof ViewsOfWebsite>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
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
