import { render, screen } from '@testing-library/react';
import { ProjectLinks } from './project-links';
import { faker } from '@faker-js/faker/locale/pt_BR';
import userEvent from '@testing-library/user-event';

describe('ProjectLinks component', () => {
	const userEvents = userEvent.setup();
	const props = {
		links: Array.from({ length: 3 }).map(() => ({
			name: faker.internet.domainWord(),
			link: faker.internet.url(),
		})),
		name: faker.company.name(),
	};

	it('open modal when clicked in links toggle', async () => {
		render(<ProjectLinks {...props} />);

		expect(screen.queryByLabelText(/modal-menu-container/i)).toBeNull();

		await userEvents.click(screen.getByLabelText(/modal-toggle-button/i));

		expect(screen.getByLabelText(/modal-menu-container/i)).toBeVisible();
	});

	it('close modal when clicked in X inside of modal', async () => {
		render(<ProjectLinks {...props} />);

		await userEvents.click(screen.getByLabelText(/modal-toggle-button/i));

		expect(screen.getByLabelText(/modal-menu-container/i)).toBeVisible();

		await userEvents.click(screen.getByLabelText(/modal-close-button-x/i));

		expect(screen.queryByLabelText(/modal-menu-container/i)).toBeNull();
	});

	it('copy link when clicked in copy button', async () => {
		const SpyClipBoard = jest.spyOn(navigator.clipboard, 'writeText');
		render(<ProjectLinks {...props} />);

		await userEvents.click(screen.getByLabelText(/modal-toggle-button/i));
		await userEvents.click(screen.getAllByLabelText(/copy-button/i)[0]);

		expect(SpyClipBoard).toHaveBeenCalledWith(props.links[0].link);
	});
});
