import { Title } from '@/components/title';
import { TalkMeForm } from '@/components/invite-mail';
import { ProfileAvatar } from '@/components/profile-avatar';
import { ContactLinks } from '@/components/contact';
import { div as MotionDiv } from 'motion/react-client';

export default function TalkMePage() {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='block h-full gap-8 lg:flex lg:justify-between '>
			<div className='flex flex-col gap-6 w-full'>
				<Title>Enviar E-Mail</Title>

				<TalkMeForm />
			</div>

			<div className='hidden lg:flex flex-col items-center justify-center gap-4 h-fit'>
				<ProfileAvatar />

				<ContactLinks />
			</div>
		</MotionDiv>
	);
}
