import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { RootContainer } from './root';
import { CircleCheckBig } from 'lucide-react';
import { toast } from 'react-toastify';

const Child = () => {
	return (
		<div className='block h-screen min-h-96 bg-zinc-900 text-zinc-100 relative pt-4 pl-4'>
			<button
				type='button'
				className='px-6 py-px rounded bg-blue-500'
				onClick={() => {
					toast.success('Enviado com sucesso!', {
						icon: <CircleCheckBig className='text-blue-600 size-6' />,
					});
				}}>
				notification
			</button>
		</div>
	);
};

const meta = {
	title: 'Layout/Root',
	component: RootContainer,
	argTypes: {
		children: {
			description: 'wrapper all application',
		},
	},
	args: {
		children: <Child />,
	},
} satisfies Meta<typeof RootContainer>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
