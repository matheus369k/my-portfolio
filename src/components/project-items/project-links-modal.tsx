'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Modal from '@mui/material/Modal';
import { X, ExternalLink } from 'lucide-react';
import type { ProjectType } from '@/@types';
import { CopyButton } from '../ui/copy-button';
import { BaseLink } from '../ui/base-link';

type ProjectLinksModalProps = Pick<ProjectType, 'links' | 'name'> & {
	onCloseModal: () => void;
	open: boolean;
};

export default function ProjectLinksModal(props: ProjectLinksModalProps) {
	const { onCloseModal, links, name, open } = props;

	function renderLinksUI(props: { name: string; link: string }) {
		return (
			<div key={props.name} className='flex flex-col gap-1'>
				<span className='text-base font-bold capitalize'>{props.name}</span>

				<div className='flex gap-4 w-full'>
					<div className='relative w-full flex items-center gap-1 border border-zinc-700 rounded-lg py-2 px-4'>
						<p className='text-base text-zinc-700 font-bold truncate absolute w-5/6'>
							{props.link}
						</p>

						<CopyButton link={props.link} />
					</div>

					<BaseLink href={props.link} size='fit'>
						<Button
							types='icon'
							aria-label='access-page'
							className='bg-blue-600 text-zinc-100 hover:text-zinc-100 hover:bg-blue-500'>
							<ExternalLink />
						</Button>
					</BaseLink>
				</div>
			</div>
		);
	}

	return (
		<Modal
			open={open}
			aria-label='modal-menu-container'
			onClose={onCloseModal}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<div className=' max-w-xl flex flex-col gap-y-6 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 outline-none outline px-5 py-8 rounded-lg focus:outline-none'>
				<button
					className='absolute right-4 top-4 size-fit'
					type='button'
					onClick={onCloseModal}
					aria-label='modal-close-button-x'>
					<X className='size-5 text-zinc-700' />
				</button>

				<h3 className='text-base font-bold text-center'>
					Links do projeto {name}
				</h3>

				{links.map(renderLinksUI)}
			</div>
		</Modal>
	);
}
