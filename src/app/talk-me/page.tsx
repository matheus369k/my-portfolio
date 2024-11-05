import { ContactLinks } from '@/components/contact-links';
import { ProfileAvatar } from '@/components/profile-avatar';
import { TalkMeForm } from '@/components/talk-me-form';
import { Title } from '@/components/title';

export default function TalkMePage() {
	return (
		<div className='flex justify-between h-full'>
			<section className='flex flex-col gap-6 w-full max-w-lg'>
				<Title>Enviar E-Mail</Title>

				<TalkMeForm />
			</section>

			<section className='flex flex-col items-center justify-center gap-8'>
				<ProfileAvatar />
				<ContactLinks />
			</section>
		</div>
	);
}
