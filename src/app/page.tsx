import Link from 'next/link';
import { ContactLinks } from '@/components/contact/links';
import { ProfileAvatar } from '@/components/profile-avatar';
import { AutoWriteJob } from '@/components/auto-write-job';

export default function Home() {
	return (
		<div className='grid grid-cols-[repeat(2,_auto)] grid-rows-1 place-content-between place-items-center h-full'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-full'>
					<h1 className='font-semibold text-4xl'>
						Olá, me chamo <span className='text-blue-600'>Ma</span>the
						<span className='text-blue-600'>us</span>
					</h1>
					<AutoWriteJob />
				</div>

				<p className='max-w-lg'>
					Seja bem-vindo ao meu portfólio. Se tiver algum feedback ou quer uma
					forma rápida de me contactar, acesse a pagina{' '}
					<Link href='/talk-me' className='underline'>
						‘Fale Comigo’
					</Link>
					.
				</p>
				
			<div className='border-b border-zinc-700 w-full h-px' />

				<ContactLinks />
			</div>

			<ProfileAvatar />
		</div>
	);
}
