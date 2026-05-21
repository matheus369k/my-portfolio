import Link from 'next/link';
import { SocialMedias } from '@/components/social-medias';
import { ProfileAvatar } from '@/components/profile-avatar';
import dynamic from 'next/dynamic';

const AutoWriteJobDynamic = dynamic(
	() => import('@/components/ui/auto-write-job'),
	{ ssr: false },
);

export default function HomePage() {
	return (
		<div className='grid grid-cols-1 place-content-center place-items-center h-full grid-rows-[repeat(2,_auto)] gap-y-8 lg:place-content-between lg:grid-cols-[repeat(2,_auto)] lg:grid-rows-1'>
			<div className='flex flex-col items-center gap-4 col-start-1'>
				<div className='w-full'>
					<h1 className='font-semibold text-4xl'>
						Olá, me chamo <span className='text-blue-600'>Matheus</span>
					</h1>
					<AutoWriteJobDynamic />
				</div>

				<p className='max-w-lg'>
					Seja bem-vindo ao meu portfólio. Se tiver algum feedback ou quer uma
					forma rápida de me contactar, acesse a pagina{' '}
					<Link href='/talk-me' className='underline'>
						‘Fale Comigo’
					</Link>
					.
				</p>

				<SocialMedias />
			</div>

			<ProfileAvatar />
		</div>
	);
}
