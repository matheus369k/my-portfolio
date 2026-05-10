import { env } from '@/lib/env';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BaseLink } from './ui/base-link';
import { Button } from './ui/button';

export function SocialMedias() {
	return (
		<div className='flex items-center justify-between gap-6'>
			<BaseLink href={env.NEXT_PUBLIC_CV_LINK}>
				<Button>Baixar CV</Button>
			</BaseLink>

			<BaseLink href={env.NEXT_PUBLIC_LINKEDIN_LINK}>
				<Button aria-label='LinkedIn' types='icon'>
					<Linkedin className='size-6 text-blue-600' />
				</Button>
			</BaseLink>

			<BaseLink href={env.NEXT_PUBLIC_GITHUB_LINK}>
				<Button aria-label='Github' types='icon'>
					<Github className='size-6 text-blue-600' />
				</Button>
			</BaseLink>

			<BaseLink href={env.NEXT_PUBLIC_MAIL_LINK}>
				<Button aria-label='E-Mail' types='icon'>
					<Mail className='size-6 text-blue-600' />
				</Button>
			</BaseLink>
		</div>
	);
}
