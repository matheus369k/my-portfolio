import Image from 'next/image';
import { AvatarBorder } from './avatar-border';

export function ProfileAvatar() {
	return (
		<div className='flex-1 overflow-hidden'>
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
	);
}
