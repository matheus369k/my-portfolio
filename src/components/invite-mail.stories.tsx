import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TalkMeForm } from './invite-mail';
import { http, HttpResponse } from 'msw';
import { env } from '@/lib/env';
import AlertMessage from './ui/alert-message';

const meta = {
	title: 'Components/InviteMail',
	component: TalkMeForm,
	decorators(Story) {
		return (
			<div>
				{Story()}
				<AlertMessage />
			</div>
		);
	},
} satisfies Meta<typeof TalkMeForm>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Success: Story = {
	parameters: {
		msw: {
			handlers: [
				http.post(`${env.NEXT_PUBLIC_BACK_END_URL}/invite-email`, () => {
					return HttpResponse.json({ status: 'ok' });
				}),
			],
		},
	},
};

export const Wrong: Story = {
	parameters: {
		msw: {
			handlers: [
				http.post(`${env.NEXT_PUBLIC_BACK_END_URL}/invite-email`, () => {
					return HttpResponse.error();
				}),
			],
		},
	},
};
