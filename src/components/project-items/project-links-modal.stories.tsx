import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import ProjectLinksModal from './project-links-modal';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { useArgs } from 'storybook/preview-api';

const argsDefault = {
	links: Array.from({ length: 3 }).map(() => ({
		name: faker.internet.domainWord(),
		link: faker.internet.url(),
	})),
	name: faker.company.name(),
	onCloseModal: fn,
	open: false,
};

const meta = {
	title: 'Components/ProjectItems/ProjectLinksModal',
	component: ProjectLinksModal,
	decorators(Story) {
		const [args, updateArgs] = useArgs();

		const onCloseModal = () => {
			updateArgs({ ...args, open: false });
		};

		const onOpenModal = () => {
			updateArgs({ ...args, open: true });
		};

		return (
			<div>
				<button
					type='button'
					aria-label='modal-toggle-button'
					onClick={onOpenModal}>
					Links
				</button>
				{Story({
					args: {
						...args,
						onCloseModal: onCloseModal,
					},
				})}
			</div>
		);
	},
	argTypes: {
		links: { description: 'Array of the object with link and name' },
		name: { description: 'named from project' },
		onCloseModal: { description: 'function to close modal' },
		open: { description: 'property speak if modal is open' },
	},
	args: {
		...argsDefault,
	},
} satisfies Meta<typeof ProjectLinksModal>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
