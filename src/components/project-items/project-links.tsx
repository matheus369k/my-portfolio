'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { ProjectType } from '@/@types';
import dynamic from 'next/dynamic';

const ProjectLinksModalDynamic = dynamic(
	() => import('./project-links-modal'),
	{ ssr: false },
);

export function ProjectLinks(props: Pick<ProjectType, 'links' | 'name'>) {
	const [open, setOpen] = React.useState(false);

	function handleOpenModal() {
		setOpen(true);
	}

	const handleCloseModal = React.useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<div className='w-full sm:w-fit'>
			<Button
				aria-label='modal-toggle-button'
				onClick={handleOpenModal}
				size='full'>
				Links
			</Button>

			<ProjectLinksModalDynamic
				{...props}
				onCloseModal={handleCloseModal}
				open={open}
			/>
		</div>
	);
}
