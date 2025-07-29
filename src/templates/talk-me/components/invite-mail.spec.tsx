import { render, screen } from '@testing-library/react';
import { TalkMeForm } from './invite-mail';
import axiosMockAdapter from 'axios-mock-adapter';
import { fetchAPI } from '@/lib/axios';
import userEvent from '@testing-library/user-event';

describe('<InviteMail />', () => {
	const fetchApi = new axiosMockAdapter(fetchAPI, { delayResponse: 1000 });
	const user = userEvent.setup();

	afterEach(() => {
		fetchApi.reset();
	});

	it('should render corrected', () => {
		render(<TalkMeForm />);

		screen.getAllByRole('textbox', { name: /nome/i });
		screen.getAllByRole('textbox', { name: /e-mail/i });
		screen.getAllByRole('textbox', { name: /mensagem/i });
	});

	it('should validation values when are fields than empty', async () => {
		render(<TalkMeForm />);
		const btnSubmit = screen.getByRole('button');

		expect(screen.queryByText(/Nome é obrigatório/i)).toBeNull();
		expect(screen.queryByText(/E-Mail é obrigatório/i)).toBeNull();
		expect(screen.queryByText(/Mensagem é obrigatória/i)).toBeNull();
		await user.click(btnSubmit);

		screen.getByText(/Nome é obrigatório/i);
		screen.getByText(/E-Mail é obrigatório/i);
		screen.getByText(/Mensagem é obrigatória/i);
	});

	it('should validation email value when is invalide', async () => {
		fetchApi.onPost('/invite-email').replyOnce(201, 'ok');
		render(<TalkMeForm />);
		const fieldName = screen.getByRole('textbox', { name: /nome/i });
		const fieldEmail = screen.getByRole('textbox', { name: /e-mail/i });
		const fieldMessage = screen.getByRole('textbox', { name: /mensagem/i });
		const btnSubmit = screen.getByRole('button');

		expect(fieldEmail).toBeValid();
		await user.type(fieldName, 'Dev Front');
		await user.type(fieldEmail, 'test#gmail.com');
		await user.type(fieldMessage, 'Ola, dev front aqui...');
		await user.click(btnSubmit);

		expect(fieldEmail).toBeInvalid();
		await user.clear(fieldEmail);
		await user.type(fieldEmail, 'test@gmail.com');
		await user.click(btnSubmit);

		expect(fieldEmail).toBeValid();
	});

	it('should switch text in the button when is clicked in invite email', async () => {
		fetchApi.onPost('/invite-email').replyOnce(201, 'ok');
		render(<TalkMeForm />);
		const fieldName = screen.getByRole('textbox', { name: /nome/i });
		const fieldEmail = screen.getByRole('textbox', { name: /e-mail/i });
		const fieldMessage = screen.getByRole('textbox', { name: /mensagem/i });
		const btnSubmit = screen.getByRole('button');

		expect(btnSubmit).toHaveTextContent(/Enviar/i);
		await user.type(fieldName, 'Dev Front');
		await user.type(fieldEmail, 'test@gmail.com');
		await user.type(fieldMessage, 'Ola, dev front aqui...');
		await user.click(btnSubmit);

		expect(btnSubmit).toHaveTextContent(/Enviando.../i);
	});

	it('should invite corrected datas on the body of the invite mail request', async () => {
		fetchApi.onPost('/invite-email').replyOnce(201, 'ok');
		render(<TalkMeForm />);
		const fieldName = screen.getByRole('textbox', { name: /nome/i });
		const fieldEmail = screen.getByRole('textbox', { name: /e-mail/i });
		const fieldMessage = screen.getByRole('textbox', { name: /mensagem/i });
		const btnSubmit = screen.getByRole('button');
		const data = {
			from_name: 'Dev Front',
			email: 'test@gmail.com',
			message: 'Ola, dev front aqui...',
		};

		await user.type(fieldName, data.from_name);
		await user.type(fieldEmail, data.email);
		await user.type(fieldMessage, data.message);
		await user.click(btnSubmit);

		const requestBody = JSON.parse(fetchApi.history[0].data);
		expect(requestBody).toMatchObject(data);
	});
});
