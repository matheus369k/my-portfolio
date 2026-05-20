import { Title } from '@/components/ui/title';

export function ProjectLoading() {
	return (
		<div className='animate-pulse cursor-default flex flex-col justify-between gap-y-6 border-b border-zinc-700 py-12 first-of-type:pt-8 last-of-type:border-none md:gap-y-12 w-full'>
			<div className='flex flex-col gap-6 items-center justify-between sm:flex-row w-full'>
				<Title className='relative self-start w-64 h-9 bg-zinc-800 rounded-md' />

				<div className='flex gap-y-8 gap-x-4 w-full sm:w-auto'>
					<div className='h-10 w-full sm:w-28 bg-zinc-800 rounded-md' />
					<div className='h-10 w-full sm:w-28 bg-zinc-800 rounded-md' />
				</div>
			</div>

			<div className='flex flex-col-reverse mx-auto xl:mx-0 gap-y-6 xl:flex-row  w-full'>
				<div className='max-w-5xl flex flex-col gap-8 xl:flex-1'>
					<div className='flex flex-col gap-2'>
						<div className='h-7 w-28 bg-zinc-800 rounded-md mb-2' />
						<div className='space-y-2 px-4'>
							<div className='h-4 w-full bg-zinc-800 rounded-md' />
							<div className='h-4 w-5/6 bg-zinc-800 rounded-md' />
							<div className='h-4 w-4/5 bg-zinc-800 rounded-md' />
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<div className='h-7 w-32 bg-zinc-800 rounded-md mb-2' />
						<div className='flex flex-wrap gap-2.5 px-4'>
							<div className='h-10 w-20 bg-zinc-800 rounded-lg border border-zinc-700/50' />
							<div className='h-10 w-24 bg-zinc-800 rounded-lg border border-zinc-700/50' />
							<div className='h-10 w-16 bg-zinc-800 rounded-lg border border-zinc-700/50' />
							<div className='h-10 w-28 bg-zinc-800 rounded-lg border border-zinc-700/50' />
						</div>
					</div>
				</div>

				<div className='relative aspect-video w-full h-full bg-zinc-800 rounded-lg border border-zinc-700/20 max-w-2xl mx-auto xl:mx-0'>
					<div className='absolute -right-px -bottom-px flex items-center gap-1 px-4 py-2 border-zinc-700 border border-r-zinc-900 border-b-zinc-900 rounded-md rounded-tr-none rounded-b-none bg-zinc-900'>
						<div className='h-4 w-8 bg-zinc-700 rounded-sm' />
						<div className='h-4 w-4 bg-zinc-700 rounded-full' />
					</div>
				</div>
			</div>
		</div>
	);
}
