import { renderHook } from '@testing-library/react';
import { useInviteMail } from './use-invite-mail';
import { CircleCheckBig, CircleX } from 'lucide-react';
import axiosMockAdapter from 'axios-mock-adapter';
import { act } from 'react';
import { fetchAPI } from '@/lib/axios';

const mockTooastError = jest.fn();
const mockTooastSuccess = jest.fn();
jest.mock('react-toastify', () => ({
	toast: {
		error: (message: string, option: object) =>
			mockTooastError({ message, option }),
		success: (message: string, option: object) =>
			mockTooastSuccess({ message, option }),
	},
}));

describe('useInviteMail()', () => {
	const fetchApi = new axiosMockAdapter(fetchAPI);
	const InviteMailDatas = {
		from_name: 'test',
		email: 'tes@gmail.comt',
		message: 'ola, test aqui',
	};

	it('should initialized corrected', () => {
		const { result } = renderHook(() =>
			useInviteMail({
				reset: () => jest.fn(),
			}),
		);

		expect(result.current.isLoading).toBeFalsy();
		expect(result.current.handleInviteEmail).toBeTruthy();
	});

	it('should add isLoading as true before call function inviteMail after toggle to false', async () => {
		fetchApi.onPost('/invite-email').replyOnce(200, 'ok');
		const { result } = renderHook(() =>
			useInviteMail({
				reset: () => jest.fn(),
			}),
		);

		act(() => {
			result.current.handleInviteEmail(InviteMailDatas);
		});

		expect(result.current.isLoading).toBeTruthy();

		await act(async () => {
			await result.current.handleInviteEmail(InviteMailDatas);
		});

		expect(result.current.isLoading).toBeFalsy();
	});

	it('should call toast.error and not call reset when status is error', async () => {
		fetchApi.onPost('/invite-email').replyOnce(500, 'server error');
		const mockReset = jest.fn();
		const { result } = renderHook(() =>
			useInviteMail({
				reset: () => mockReset(),
			}),
		);

		await act(async () => {
			await result.current.handleInviteEmail(InviteMailDatas);
		});

		expect(mockTooastError).toHaveBeenCalledWith({
			message: 'Error ao tentar enviar!',
			option: {
				icon: <CircleX className='text-red-600 size-6' />,
			},
		});
		expect(mockReset).not.toHaveBeenCalled();
	});

	it('should call toast.success and call reset when status is ok', async () => {
		fetchApi.onPost('/invite-email').replyOnce(200, 'ok');
		const mockReset = jest.fn();
		const { result } = renderHook(() =>
			useInviteMail({
				reset: () => mockReset(),
			}),
		);

		await act(async () => {
			await result.current.handleInviteEmail(InviteMailDatas);
		});

		expect(mockTooastSuccess).toHaveBeenCalledWith({
			message: 'Enviado com sucesso!',
			option: {
				icon: <CircleCheckBig className='text-blue-600 size-6' />,
			},
		});
		expect(mockReset).toHaveBeenCalled();
	});
});
