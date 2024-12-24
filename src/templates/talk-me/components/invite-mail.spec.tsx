'use client';

import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { TalkMeForm } from './invite-mail';
import { act } from 'react';

const mockHandleSubmit = jest.fn();
const mockUseFormErrorsField = jest.fn().mockReturnValue({
	message: undefined,
	from_name: undefined,
	email: undefined,
});
const mockInviteEmail = jest.fn().mockReturnValue({
	handleInviteEmail: jest.fn(),
	isLoading: false,
});

jest.mock('./input', () => ({
	Input: ({ ...props }) => <input {...props} />,
}));

jest.mock('./label', () => ({
	Label: ({
		children,
		htmlFor,
		...props
	}: { children: React.ReactNode; htmlFor: string }) => (
		<label {...props} htmlFor={htmlFor}>
			{children}
		</label>
	),
}));

jest.mock('./alert-message', () => ({
	AlertMessage: () => <div data-testid='AlertMessage' />,
}));

jest.mock('../hooks/use-invite-mail', () => ({
	useInviteMail: () => mockInviteEmail(),
}));

jest.mock('react-hook-form', () => ({
	...jest.requireActual('react-hook-form'),
	FormProvider: ({ children, ...props }: { children: React.ReactNode }) => (
		<div data-testid='TalkMeForm'>{children}</div>
	),
	useForm: () => ({
		handleSubmit: mockHandleSubmit,
		register: jest.fn(),
		reset: jest.fn(),
		formState: {
			errors: mockUseFormErrorsField(),
		},
	}),
}));

describe('<InviteMail />', () => {
	it('should render FormProvier', () => {
		const { getByTestId } = render(<TalkMeForm />);

		const formElement = getByTestId('TalkMeForm');
		expect(formElement).toBeVisible();
	});

	it('should render all label fields', () => {
		const { getByText } = render(<TalkMeForm />);

		const labelFromNameElement = getByText('Nome');
		const labelMessageElement = getByText('Mensagem');
		const labelEmailElement = getByText('E-Mail');

		expect(labelFromNameElement).toBeVisible();
		expect(labelMessageElement).toBeVisible();
		expect(labelEmailElement).toBeVisible();
	});

	it('should render all input fields', () => {
		const { getByRole } = render(<TalkMeForm />);

		const inputFromNameElement = getByRole('textbox', { name: 'Nome' });
		const inputMessageElement = getByRole('textbox', { name: 'Mensagem' });
		const inputEmailElement = getByRole('textbox', { name: 'E-Mail' });

		expect(inputFromNameElement).toBeVisible();
		expect(inputMessageElement).toBeVisible();
		expect(inputEmailElement).toBeVisible();
	});

	it('should render input with correct attributes', () => {
		const { getByRole } = render(<TalkMeForm />);

		const inputFromNameElement = getByRole('textbox', { name: 'Nome' });
		const inputMessageElement = getByRole('textbox', { name: 'Mensagem' });
		const inputEmailElement = getByRole('textbox', { name: 'E-Mail' });

		expect(inputFromNameElement).toHaveAttribute('name', 'from_name');
		expect(inputMessageElement).toHaveAttribute('name', 'message');
		expect(inputEmailElement).toHaveAttribute('name', 'email');

		expect(inputFromNameElement).toHaveAttribute(
			'placeholder',
			'Digite seu nome',
		);
		expect(inputMessageElement).toHaveAttribute(
			'placeholder',
			'Digite aqui sua mensagem',
		);
		expect(inputEmailElement).toHaveAttribute(
			'placeholder',
			'Digite seu e-mail',
		);

		expect(inputFromNameElement).toHaveAttribute('type', 'text');
		expect(inputEmailElement).toHaveAttribute('type', 'email');

		expect(inputFromNameElement).toHaveAttribute('id', 'from_name');
		expect(inputMessageElement).toHaveAttribute('id', 'message');
		expect(inputEmailElement).toHaveAttribute('id', 'email');
	});

	it('should render all label with correct attributes', () => {
		const { getByText } = render(<TalkMeForm />);

		const labelFromNameElement = getByText('Nome');
		const labelMessageElement = getByText('Mensagem');
		const labelEmailElement = getByText('E-Mail');

		expect(labelFromNameElement).toHaveAttribute('for', 'from_name');
		expect(labelMessageElement).toHaveAttribute('for', 'message');
		expect(labelEmailElement).toHaveAttribute('for', 'email');
	});

	it('should render message field with style of the error', () => {
		mockUseFormErrorsField.mockReturnValueOnce({
			message: {
				type: 'required',
				message: 'Mensagem é obrigatória',
			},
			from_name: undefined,
			email: undefined,
		});

		const { getByRole } = render(<TalkMeForm />);

		const inputMessageElement = getByRole('textbox', { name: 'Mensagem' });
		expect(inputMessageElement).toHaveClass('border-red-600');
		expect(inputMessageElement).not.toHaveClass('border-zinc-700');
	});

	it('should render message field without style of the error', () => {
		const { getByRole } = render(<TalkMeForm />);

		const inputMessageElement = getByRole('textbox', { name: 'Mensagem' });
		expect(inputMessageElement).toHaveClass('border-zinc-700');
		expect(inputMessageElement).not.toHaveClass('border-red-600');
	});

	it('should call handleSubmit from useForm with handleInviteEmail how props', () => {
		render(<TalkMeForm />);

		expect(mockHandleSubmit).toHaveBeenCalledWith(
			mockInviteEmail().handleInviteEmail,
		);
	});

	it('should render AlertMessage component', () => {
		const { getByTestId } = render(<TalkMeForm />);

		const alertMessageElement = getByTestId('AlertMessage');
		expect(alertMessageElement).toBeInTheDocument();
	});

	it('should render button with loading state', () => {
		mockInviteEmail.mockReturnValueOnce({
			isLoading: true,
		});

		const { getByRole } = render(<TalkMeForm />);

		const buttonElement = getByRole('button', { name: 'Enviando...' });
		expect(buttonElement).toHaveClass('opacity-50 cursor-not-allowed');
		expect(buttonElement).toBeDisabled();
	});

	it('should render button without loading state', () => {
		mockInviteEmail.mockReturnValueOnce({
			isLoading: false,
		});

		const { getByRole } = render(<TalkMeForm />);

		const buttonElement = getByRole('button', { name: 'Enviar' });
		expect(buttonElement).not.toHaveClass('opacity-50 cursor-not-allowed');
		expect(buttonElement).not.toBeDisabled();
	});
});
