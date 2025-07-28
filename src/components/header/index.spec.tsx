import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '.';
import axiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('<Header />', () => {
	const user = userEvent.setup();
	const MockAxios = new axiosMockAdapter(axios);
	beforeEach(() => {
		MockAxios.onGet(`${process.env.NEXT_PUBLIC_BACK_END_URL}/hearth`).replyOnce(
			200,
			'ok',
		);
	});

	it('should render correctly', () => {
		render(<Header />);
		const logoElement = screen.getByRole('link', { name: '<M.G />' });
		expect(logoElement).toHaveAttribute('href', '/');
		const presentationElement = screen.getByRole('link', {
			name: /apresentação/i,
		});
		expect(presentationElement).toHaveAttribute('href', '/');
		const learnElement = screen.getByRole('link', { name: /aprendizado/i });
		expect(learnElement).toHaveAttribute('href', '/learn');
		const projectsElement = screen.getByRole('link', { name: /projetos/i });
		expect(projectsElement).toHaveAttribute('href', '/projects');
		const talkMeElement = screen.getByRole('link', { name: /fale comigo/i });
		expect(talkMeElement).toHaveAttribute('href', '/talk-me');
	});

	it('should open and close menu when clicked on the button toggle menu', async () => {
		window.outerWidth = 543;
		render(<Header />);
		const buttonToggleMenu = screen.getByRole('button');

		await user.click(buttonToggleMenu);
		screen.getByRole('button', { name: /open menu/i });
		expect(screen.queryByRole('button', { name: /close menu/i })).toBeNull();

		await user.click(buttonToggleMenu);
		screen.getByRole('button', { name: /close menu/i });
		expect(screen.queryByRole('button', { name: /open menu/i })).toBeNull();
	});

	it('should hidden navbar when menu is closed and show when menu is open', async () => {
		window.outerWidth = 543;
		render(<Header />);
		const buttonToggleMenu = screen.getByRole('button');
		const listItems = screen.getByRole('list');

		await user.click(buttonToggleMenu);
		expect(listItems).toHaveClass('absolute top-12 right-0');
		expect(listItems).not.toHaveClass('hidden');

		await user.click(buttonToggleMenu);
		expect(listItems).not.toHaveClass('absolute top-12 right-0');
		expect(listItems).toHaveClass('hidden');
	});
});
