import { ContactLink } from '@/components/contact-link';
import { AvatarBorder } from '@/components/avatar-border';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { env } from '@/env';

export default function Home() {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex flex-col justify-center items-center gap-4'>
				<h1 className='text-center font-bold text-5xl'>Desenvolvedor Web</h1>
				<p className='max-w-lg font-semibold text-center'>
					Olá, Me chamo Matheus. Seja bem-vindo ao meu portfólio. Se tiver algum
					feedback ou quer uma forma rápida de me contactar, acesse a pagina{' '}
					<Link href='/talk-me' className='underline'>
						‘Fale Comigo’
					</Link>
					.
				</p>
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
			</div>

			<div className='flex-1'>
				<div className='relative size-[454px] mx-auto flex justify-center items-center rounded-full'>
					<AvatarBorder
						className='size-full'
						hiddenBorder='right'
						animation='reverse'
					/>
					<AvatarBorder
						className='size-[440px]'
						animation='reverse'
						hiddenBorder='left'
					/>
					<AvatarBorder className='size-[414px]' hiddenBorder='bottom' />
					<AvatarBorder className='size-[400px]' hiddenBorder='top' />

					<div className='bg-gradient-to-t from-zinc-700/20 to-zinc-900/20 rounded-full flex justify-center items-center size-[400px]'>
						<Image src='./avatar.svg' width={300} height={300} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}
