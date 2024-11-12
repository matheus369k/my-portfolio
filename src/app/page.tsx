import { AvatarBorder } from '@/components/avatar-border';
import Image from 'next/image';
import Link from 'next/link';
import { ContactLinks } from '@/components/contact/links';
import { ProfileAvatar } from '@/components/profile-avatar';

export default function Home() {
	return (
		<div className='grid grid-cols-[repeat(2,_auto)] grid-rows-1 place-content-between place-items-center h-full'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-center font-bold text-5xl'>Desenvolvedor Web</h1>
				<p className='max-w-lg font-semibold text-center'>
					Olá, Me chamo Matheus. Seja bem-vindo ao meu portfólio. Se tiver algum
					feedback ou quer uma forma rápida de me contactar, acesse a pagina{' '}
					<Link href='/talk-me' className='underline'>
						‘Fale Comigo’
					</Link>
					.
				</p>

				<ContactLinks />
			</div>

			<ProfileAvatar />
		</div>
	);
}
