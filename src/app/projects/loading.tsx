import { ProjectItemLoading } from '@/components/project-item-loading';

export default function Loading() {
	return (
		<div className='max-w-full'>
			<div className='flex flex-col justify-center gap-y-6'>
				<div className='flex flex-col'>
					{Array.from({ length: 2 }).map((_, index) => {
						return <ProjectItemLoading key={Date.now()} />;
					})}
				</div>
			</div>
		</div>
	);
}
