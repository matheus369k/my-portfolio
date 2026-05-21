import { Title } from '@/components/ui/title';
import { TalkMeForm } from '@/components/invite-mail';
import { ProfileAvatar } from '@/components/profile-avatar';
import { SocialMedias } from '@/components/social-medias';

export default function TalkMePage() {
	return (
		<div className='block h-full gap-8 lg:flex lg:justify-between '>
			<div className='flex flex-col gap-6 w-full'>
				<Title>Enviar E-Mail</Title>

				<TalkMeForm />
			</div>

			<div className='hidden lg:flex flex-col items-center justify-center gap-4 h-fit'>
				<ProfileAvatar />

				<SocialMedias />
			</div>
		</div>
	);
}
