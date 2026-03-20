'use client';

import { useUpdateWebsiteViews } from '@/services/use-update-website-views';
import { useGetWebsiteViews } from '@/services/use-get-website-views';
import { Eye } from 'lucide-react';
import { useEffect } from 'react';
import { useCreateWebsiteViews } from '@/services/use-create-website-views';
import { FormatterNumber } from '@/util/formatter-number';
import CountUp from 'react-countup';

export function ViewsOfWebsite({ isNotHomePage }: { isNotHomePage: boolean }) {
	const { mutate: updateWebsiteViews, submittedAt: updateSubmittedAt } =
		useUpdateWebsiteViews();
	const { mutate: createWebsiteViews, submittedAt: createSubmittedAt } =
		useCreateWebsiteViews();
	const { data, isError, isSuccess } = useGetWebsiteViews();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!createSubmittedAt && isError) {
			createWebsiteViews();
		}

		if (!updateSubmittedAt && isSuccess) {
			updateWebsiteViews();
		}
	}, [isError, isSuccess]);

	if (isNotHomePage) return null;

	return (
		<div className='flex items-center gap-1 font-bold text-sm absolute bottom-[1px] z-50 left-1/2 -translate-x-1/2 translate-y-full px-4 py-1 border-zinc-700 border rounded-md border-t-zinc-900 rounded-t-none bg-zinc-900'>
			<CountUp
				start={0}
				end={data?.views || 0}
				duration={2}
				formattingFn={FormatterNumber}
			/>
			<Eye className='size-5' />
		</div>
	);
}
