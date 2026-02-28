import type { FormData, ReturnInviteMail } from '@/@types';
import { CircleCheckBig, CircleX } from 'lucide-react';
import { toast } from 'react-toastify';
import { inviteMail } from '@/services/invite-mail';

interface UseInviteMailProps {
	reset: () => void;
}

export function useInviteMail({ reset }: UseInviteMailProps) {
	async function handleInviteEmail({ from_name, email, message }: FormData) {
		const { status } = await inviteMail({
			from_name,
			message,
			email,
		});

		handleShowNotification({ status });
	}

	function handleShowNotification({ status }: ReturnInviteMail) {
		if (status === 'error') {
			toast.error('Error ao tentar enviar!', {
				icon: <CircleX className='text-red-600 size-6' />,
			});

			return;
		}

		toast.success('Enviado com sucesso!', {
			icon: <CircleCheckBig className='text-blue-600 size-6' />,
		});
		reset();
	}

	return { handleInviteEmail };
}
