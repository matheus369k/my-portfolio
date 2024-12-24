import { env } from '@/lib/env';
import { ContactLink } from './link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactLinks() {
	return (
		<div className='flex items-center gap-6'>
			<ContactLink href={env.NEXT_PUBLIC_CV_LINK}>Baixar CV</ContactLink>

			<ContactLink onlyIcon href={env.NEXT_PUBLIC_LINKEDIN_LINK}>
				<Linkedin className='size-6 text-blue-600' />
			</ContactLink>

			<ContactLink onlyIcon href={env.NEXT_PUBLIC_GITHUB_LINK}>
				<Github className='size-6 text-blue-600' />
			</ContactLink>

			<ContactLink onlyIcon href={env.NEXT_PUBLIC_MAIL_LINK}>
				<Mail className='size-6 text-blue-600' />
			</ContactLink>
		</div>
	);
}
