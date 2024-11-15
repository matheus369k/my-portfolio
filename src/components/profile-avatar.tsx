import Image from 'next/image';
import { AvatarBorder } from './avatar-border';

export function ProfileAvatar() {
	return (
		<div className='flex-1 overflow-hidden row-start-1 lg:col-start-2'>
			<div className='relative size-[354px] lg:size-[454px] mx-auto flex justify-center items-center rounded-full'>
				<AvatarBorder
					className='size-full'
					hiddenBorder='right'
					animation='reverse'
				/>
				<AvatarBorder
					className='size-[340px] lg:size-[440px]'
					animation='reverse'
					hiddenBorder='left'
				/>
				<AvatarBorder
					className='size-[314px] lg:size-[414px]'
					hiddenBorder='bottom'
				/>
				<AvatarBorder
					className='size-[300px] lg:size-[400px]'
					hiddenBorder='top'
				/>

				<div className='bg-gradient-to-t from-zinc-700/20 to-zinc-900/20 rounded-full flex justify-center items-center size-[300px] lg:size-[400px]'>
					<Image width={300} height={300} className='size-[220px] lg:size-[300px]' src='./avatar.svg' alt='' />
				</div>
			</div>
		</div>
	);
}
