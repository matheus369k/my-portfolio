import { ContactLinks } from '@/components/contact/links';
import { ProfileAvatar } from '@/components/profile-avatar';
import { TalkMeForm } from '@/components/form/invite-mail';
import { Title } from '@/components/title';

export default function TalkMePage() {
	return (
		<div className='block h-full gap-8 lg:flex
		 lg:justify-between '>
			<section className='flex flex-col gap-6 w-full'>
				<Title>Enviar E-Mail</Title>

				<TalkMeForm />
			</section>

			<section className='hidden lg:flex flex-col items-center justify-center gap-4 h-fit'>
				<ProfileAvatar />
				<ContactLinks />
			</section>
		</div>
	);
}
