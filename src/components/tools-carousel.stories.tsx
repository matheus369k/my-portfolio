import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToolsCarousel } from './tools-carousel';
import { faker } from '@faker-js/faker/locale/pt_BR';

const meta = {
	title: 'Components/ToolsCarousel',
	component: ToolsCarousel,
	argTypes: {
		tools: {
			description: 'property with all front ,back and another tools data',
		},
		className: {
			description: 'custom class to styled',
		},
	},
	args: {
		tools: {
			front_end: Array.from({ length: 7 }).map(() => ({
				_id: faker.database.mongodbObjectId(),
				name: faker.commerce.productName().replaceAll(' ', '-'),
				svg_url: faker.image.dataUri({
					type: 'svg-uri',
					color: 'blue',
					width: 32,
					height: 32,
				}),
			})),
			back_end: Array.from({ length: 7 }).map(() => ({
				_id: faker.database.mongodbObjectId(),
				name: faker.commerce.productName(),
				svg_url: faker.image.dataUri({
					type: 'svg-uri',
					color: 'blue',
					width: 32,
					height: 32,
				}),
			})),
			another: Array.from({ length: 7 }).map(() => ({
				_id: faker.database.mongodbObjectId(),
				name: faker.commerce.productName(),
				svg_url: faker.image.dataUri({
					type: 'svg-uri',
					color: 'blue',
					width: 32,
					height: 32,
				}),
			})),
		},
	},
} satisfies Meta<typeof ToolsCarousel>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
