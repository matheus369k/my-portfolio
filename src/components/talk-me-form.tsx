'use client';

import { MailIcon, MessageCircle, UserIcon } from 'lucide-react';
import { Input } from './input';
import { Label } from './label';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
	from_name: z
		.string()
		.min(1, {
			message: 'Nome é obrigatório',
		})
		.regex(/^[a-zA-Z].*$/, 'Nome inválido'),
	email: z
		.string()
		.min(1, {
			message: 'E-Mail é obrigatório',
		})
		.email('E-Mail inválido'),
	message: z
		.string()
		.min(1, {
			message: 'Mensagem é obrigatória',
		})
		.regex(/^[A-Za-z0-9.,!? ]{1,255}$/, 'Mensagem inválida'),
});

type FormData = z.infer<typeof FormSchema>;

export function TalkMeForm() {
	const hookForm = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});
	const { handleSubmit, register } = hookForm;

	function handleInviteEmail(data: FormData) {
		console.log(data);
	}

	return (
		<FormProvider {...hookForm}>
			<form
				className='flex flex-col gap-6'
				onSubmit={handleSubmit(handleInviteEmail)}>
				<div>
					<Label htmlFor='from_name'>Nome</Label>
					<div className='relative rounded-lg'>
						<Input
							type='text'
							name='from_name'
							id='from_name'
							placeholder='Digite seu nome'
						/>
						<UserIcon className='size-6 text-blue-600 absolute right-2.5 top-1/2 -translate-y-1/2' />
					</div>
				</div>
				<div>
					<Label htmlFor='email'>E-Mail</Label>
					<div className='relative rounded-lg'>
						<Input
							type='email'
							name='email'
							id='email'
							placeholder='Digite seu e-mail'
						/>
						<MailIcon className='size-6 text-blue-600 absolute right-2.5 top-1/2 -translate-y-1/2' />
					</div>
				</div>
				<div>
					<Label htmlFor='message'>Mensagem</Label>
					<div className='relative rounded-lg'>
						<textarea
							{...register('message')}
							className='px-4 w-full resize-none h-52 py-2.5 rounded-lg border border-zinc-700 placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0'
							placeholder='Digite aqui sua mensagem'
							name='message'
							id='message'
						/>
						<MessageCircle className='size-6 text-blue-600 absolute right-2.5 bottom-4' />
					</div>
				</div>

				<button
					type='submit'
					title='Enviar e-mail'
					className='px-8 py-2 bg-blue-600 font-bold w-min rounded-lg'>
					Enviar
				</button>
			</form>
		</FormProvider>
	);
}
