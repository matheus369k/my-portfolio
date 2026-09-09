import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AlertMessage from './alert-message';
import { toast } from 'react-toastify';
import { CircleCheckBig, CircleX } from 'lucide-react';

const meta = {
	title: 'Components/UI/AlertMessage',
	component: AlertMessage,
	decorators(Story) {
		function handleToggle(type: 'error' | 'success') {
			if (type === 'error') {
				return toast.error('Error ao tentar enviar!', {
					icon: <CircleX className='text-red-600 size-6' />,
				});
			}

			toast.success('Enviado com sucesso!', {
				icon: <CircleCheckBig className='text-blue-600 size-6' />,
			});
		}

		return (
			<div className='flex items-center justify-center text-blue-600 h-96 relative'>
				<div className='flex gap-4'>
					<button
						className='px-8 py-1 rounded bg-blue-600 bold text-zinc-50'
						onClick={() => handleToggle('success')}>
						Success
					</button>
					<button
						className='px-8 py-1 rounded bg-red-600 bold text-zinc-50'
						onClick={() => handleToggle('error')}>
						Error
					</button>
				</div>
				{Story()}
			</div>
		);
	},
} satisfies Meta<typeof AlertMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
