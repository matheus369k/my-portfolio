import { render, screen } from '@testing-library/react';
import { CopyButton } from './copy-button';
import { faker } from '@faker-js/faker/locale/pt_BR';
import userEvent from '@testing-library/user-event';

describe('CopyButton component', () => {
	const userEvents = userEvent.setup();

	it('saved link in clipboard when clicked in button', async () => {
		const link = faker.internet.url();
		const SpyClipBoard = jest.spyOn(navigator.clipboard, 'writeText');
		render(<CopyButton link={link} />);

		await userEvents.click(screen.getByLabelText(/copy-button/i));

		expect(SpyClipBoard).toHaveBeenCalledWith(link);
	});
});
