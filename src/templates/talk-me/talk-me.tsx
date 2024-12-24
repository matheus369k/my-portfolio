import { Title } from '@/components/title';
import { TalkMeForm } from './components/invite-mail';
import { ProfileAvatar } from '@/components/profile-avatar';
import { ContactLinks } from '@/components/contact/links';

export function TalkMe() {
	return (
		<div
			className='block h-full gap-8 lg:flex
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
