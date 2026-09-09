import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectLinks } from './project-links';
import { faker } from '@faker-js/faker/locale/pt_BR';

const meta = {
	title: 'Components/ProjectItems/ProjectLinks',
	component: ProjectLinks,
	argTypes: {
		links: { description: 'Array of the object with link and name' },
		name: { description: 'named from project' },
	},
	args: {
		links: Array.from({ length: 3 }).map(() => ({
			name: faker.internet.domainWord(),
			link: faker.internet.url(),
		})),
		name: faker.company.name(),
	},
} satisfies Meta<typeof ProjectLinks>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
