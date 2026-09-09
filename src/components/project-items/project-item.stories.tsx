import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectItem } from './project-item';
import { faker } from '@faker-js/faker/locale/pt_BR';

const meta = {
	title: 'Components/ProjectItems/ProjectItem',
	component: ProjectItem,
	argTypes: {
		isFetchPriority: { description: 'defined priority to load image' },
		project: { description: 'info datas of the project' },
	},
	args: {
		isFetchPriority: true,
		project: {
			_id: faker.database.mongodbObjectId(),
			name: faker.commerce.productName(),
			slug: faker.helpers.slugify(faker.commerce.productName()).toLowerCase(),
			tools: faker.helpers.arrayElements(
				[
					'React',
					'Next.js',
					'TypeScript',
					'Tailwind CSS',
					'Node.js',
					'GraphQL',
					'MongoDB',
					'PostgreSQL',
					'Docker',
					'Prisma',
				],
				{ min: 3, max: 6 },
			),
			image_url: faker.image.urlLoremFlickr(),
			links: [
				{
					name: 'Live Demo',
					link: faker.internet.url(),
				},
				{
					name: 'GitHub',
					link: faker.internet.url(),
				},
			],
			description: faker.lorem.paragraph({ min: 2, max: 4 }),
			access_total: faker.number.int({ min: 100, max: 50000 }),
		},
	},
} satisfies Meta<typeof ProjectItem>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
