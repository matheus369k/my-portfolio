import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './footer';
import { http, HttpResponse } from 'msw';
import { env } from '@/lib/env';
import { faker } from '@faker-js/faker/locale/pt_BR';

const meta = {
	title: 'Components/Footer',
	component: Footer,
	parameters: { react: { rsc: true } },
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(`${env.NEXT_PUBLIC_BACK_END_URL}/tools`, () => {
					return HttpResponse.json({
						tools: {
							front_end: Array.from({ length: 7 }).map(() => ({
								name: faker.commerce.productName().replaceAll(' ', '-'),
								svg_url: faker.image.dataUri({
									type: 'svg-uri',
									color: 'blue',
									width: 32,
									height: 32,
								}),
							})),
							back_end: Array.from({ length: 7 }).map(() => ({
								name: faker.commerce.productName(),
								svg_url: faker.image.dataUri({
									type: 'svg-uri',
									color: 'blue',
									width: 32,
									height: 32,
								}),
							})),
							another: Array.from({ length: 7 }).map(() => ({
								name: faker.commerce.productName(),
								svg_url: faker.image.dataUri({
									type: 'svg-uri',
									color: 'blue',
									width: 32,
									height: 32,
								}),
							})),
						},
					});
				}),
			],
		},
	},
};
