'use client';

import { renderHook } from '@testing-library/react';
import { useInviteMail } from './use-invite-mail';
import { CircleCheckBig, CircleX } from 'lucide-react';
import { act } from 'react';

const mockInviteMail = jest.fn((props) => ({
	status: 'ok',
}));
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

jest.mock('../services/invite-mail', () => ({
	inviteMail: ({ ...props }) => mockInviteMail(props),
}));

const InviteMailDatas = {
	from_name: 'test',
	email: 'tes@gmail.comt',
	message: 'ola, test aqui',
};

describe('useInviteMail()', () => {
	it('should return isLoading as false', () => {
		const { result } = renderHook(() =>
			useInviteMail({
				reset: () => jest.fn(),
			}),
		);

		expect(result.current.isLoading).toBeFalsy();
	});

	it('should add isLoading as true before call function inviteMail after toggle to false', async () => {
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
		mockInviteMail.mockReturnValueOnce({
			status: 'error',
		});

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
		mockInviteMail.mockReturnValueOnce({
			status: 'ok',
		});

        const mockReset = jest.fn();

        const { result } = renderHook(()=> useInviteMail({
            reset: () => mockReset()
        }))

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
    })

    it('should call inviteMail with correct data', async () => {
        const { result } = renderHook(() =>
			useInviteMail({
				reset: () => jest.fn(),
			}),
		);

        await act(async () => {
            await result.current.handleInviteEmail(InviteMailDatas);
        });

        expect(mockInviteMail).toHaveBeenCalledWith({
            from_name: InviteMailDatas.from_name,
            email: InviteMailDatas.email,
            message: InviteMailDatas.message,
        });
    })
});
