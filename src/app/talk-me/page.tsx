import { ContactLinks } from '@/components/contact/links';
import { ProfileAvatar } from '@/components/profile-avatar';
import { TalkMeForm } from '@/components/form/invite-mail';
import { Title } from '@/components/title';

export default function TalkMePage() {
	return (
		<div className='flex items-center justify-between h-full'>
			<section className='flex flex-col gap-6 w-full max-w-lg'>
				<Title>Enviar E-Mail</Title>

				<TalkMeForm />
			</section>

			<section className='flex flex-col items-center justify-center gap-4 h-fit'>
				<ProfileAvatar />
				<ContactLinks />
			</section>
		</div>
	);
}
