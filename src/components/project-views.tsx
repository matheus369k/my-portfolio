'use client';

import { FormatterNumber } from '@/util/formatter-number';
import { Eye } from 'lucide-react';
import CountUp from 'react-countup';

export function ProjectViews({ accessTotal }: { accessTotal: number }) {
	const countDuration = accessTotal < 1000 ? 2.5 : 5;

	return (
		<div className='absolute right-0 bottom-0 flex items-center gap-1 px-4 font-bold text-sm border-zinc-700 border border-r-transparent border-b-transparent rounded-md rounded-tr-none rounded-b-none bg-zinc-900'>
			<CountUp
				formattingFn={FormatterNumber}
				duration={countDuration}
				end={accessTotal}
				start={0}
			/>
			<Eye />
		</div>
	);
}
