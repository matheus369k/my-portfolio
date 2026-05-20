import { ProjectLoading } from '@/components/project-items/project-loading';

export default function Loading() {
	return (
		<div className='max-w-full'>
			<div className='flex flex-col justify-center gap-y-6'>
				<div className='flex flex-col'>
					{Array.from({ length: 2 }).map(() => {
						return <ProjectLoading key={Date.now()} />;
					})}
				</div>
			</div>
		</div>
	);
}
