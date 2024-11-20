'use client';

import {
	MailIcon,
	MessageCircle,
	UserIcon
} from 'lucide-react';
import { Input } from './input';
import { Label } from './label';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FormData, FormSchema } from '@/@types';
import { AlertMessage } from './alert-message';
import { useInviteMail } from '../hooks/use-invite-mail';

export function TalkMeForm() {
	const hookForm = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = hookForm;

	const { handleInviteEmail, isLoading } = useInviteMail({ reset });
	const messageHasError = errors.message;

	return (
		<FormProvider {...hookForm}>
			<form
				className='flex flex-col gap-6 w-full max-w-lg'
				onSubmit={handleSubmit(handleInviteEmail)}>
				<div className='grid grid-rows-[repeat(2,_auto)] grid-cols-2'>
					<Label errors={errors.from_name} htmlFor='from_name'>
						Nome
					</Label>
					<div className='relative rounded-lg col-span-full'>
						<Input
							tabIndex={0}
							type='text'
							name='from_name'
							id='from_name'
							placeholder='Digite seu nome'
							errors={errors.from_name}
							autoFocus
						/>
						<UserIcon className='size-6 text-blue-600 absolute right-2.5 top-1/2 -translate-y-1/2' />
					</div>
				</div>
				<div className='grid grid-rows-[repeat(2,_auto)] grid-cols-2'>
					<Label errors={errors.email} htmlFor='email'>
						E-Mail
					</Label>
					<div className='relative rounded-lg col-span-full'>
						<Input
							type='email'
							name='email'
							id='email'
							placeholder='Digite seu e-mail'
							errors={errors.email}
						/>
						<MailIcon className='size-6 text-blue-600 absolute right-2.5 top-1/2 -translate-y-1/2' />
					</div>
				</div>
				<div className='grid grid-rows-[repeat(2,_auto)] grid-cols-2'>
					<Label errors={errors.message} htmlFor='message'>
						Mensagem
					</Label>
					<div className='relative rounded-lg col-span-full'>
						<textarea
							{...register('message')}
							className={`px-4 w-full resize-none h-52 py-2.5 rounded-lg border placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0 ${messageHasError ? 'border-red-600' : ' border-zinc-700'}`}
							placeholder='Digite aqui sua mensagem'
							name='message'
							id='message'
						/>
						<MessageCircle className='size-6 text-blue-600 absolute right-2.5 bottom-4' />
					</div>
				</div>

				<button
					disabled={isLoading}
					type='submit'
					title='Enviar e-mail'
					className={`px-8 py-2 bg-blue-600 font-bold w-min rounded-lg transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
					{isLoading ? 'Enviando...' : 'Enviar'}
				</button>
			</form>

			<AlertMessage />
		</FormProvider>
	);
}
