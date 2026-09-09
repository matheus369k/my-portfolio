import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CertificatesList } from './certificates-list';
import { http, HttpResponse } from 'msw';
import { env } from '@/lib/env';
import { faker } from '@faker-js/faker/locale/pt_BR';

const meta = {
	title: 'Components/CertificatesList',
	component: CertificatesList,
	parameters: { react: { rsc: true } },
} satisfies Meta<typeof CertificatesList>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(`${env.NEXT_PUBLIC_BACK_END_URL}/certificates`, () => {
					return HttpResponse.json({
						certificates: Array.from({ length: 3 }).map((_, index) => ({
							title: faker.commerce.productName(),
							description: faker.lorem.paragraph({ min: 2, max: 4 }),
							link: faker.internet.url(),
							emission_data: faker.date.past(),
							order: index + 1,
						})),
					});
				}),
			],
		},
	},
};
