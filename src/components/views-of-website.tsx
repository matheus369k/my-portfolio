'use client';

import { useGetWebsiteViews } from '@/services/use-get-website-views';
import { Eye } from 'lucide-react';
import { FormatterNumber } from '@/util/formatter-number';
import CountUp from 'react-countup';

export function ViewsOfWebsite() {
	const { data } = useGetWebsiteViews();
	const websiteViews = data?.views || 0;
	const countDuration = websiteViews < 1000 ? 2.5 : 5;

	return (
		<div className='flex items-center gap-1 font-bold text-sm absolute bottom-[1px] z-50 left-1/2 -translate-x-1/2 translate-y-full px-4 py-1 border-zinc-700 border rounded-md border-t-zinc-900 rounded-t-none bg-zinc-900'>
			<CountUp
				start={0}
				end={websiteViews}
				duration={countDuration}
				formattingFn={FormatterNumber}
			/>
			<Eye className='size-5' />
		</div>
	);
}
