import { ContactLinks } from '@/components/contact-links';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { ProfileAvatar } from '@/components/profile-avatar';
import { Title } from '@/components/title';
import { MailIcon, MessageCircle, UserIcon } from 'lucide-react';

export default function TalkMePage() {
	return (
		<div className='flex justify-between h-full'>
			<section className='flex flex-col gap-6 w-full max-w-lg'>
				<Title>Enviar E-Mail</Title>

				<form className='flex flex-col gap-6'>
					<div>
						<Label htmlFor='name'>Nome</Label>
						<div className='relative rounded-lg'>
							<Input
								type='text'
								name='name'
								id='name'
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
								className='px-4 w-full resize-none h-52 py-2.5 rounded-lg border border-zinc-700 placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0'
								placeholder='Digite aqui sua mensagem'
								name='message'
								id='message'
							/>

							<MessageCircle className='size-6 text-blue-600 absolute right-2.5 bottom-4' />
						</div>
					</div>

					<button type='submit' title='Enviar e-mail' className='px-8 py-2 bg-blue-600 font-bold w-min rounded-lg'>
						Enviar
					</button>
				</form>
			</section>

			<section className='flex flex-col items-center justify-center gap-8'>
				<ProfileAvatar />
				<ContactLinks />
			</section>
		</div>
	);
}
