'use client';

import type { ProjectImageUrl } from '@/@types';
import { ImageIcon, ImagePlay, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { usePreview } from '../hooks/use-preview';

export function ProjectPreview({ png, gif }: ProjectImageUrl) {
	const {
		handlePreviewCompleteLoad,
		handleSetPreviewGif,
		handleSetPreviewPng,
		state,
	} = usePreview({ png, gif });

	const typePreviewIsPng = state.fileType === 'png';
	const typePreviewIsGif = state.fileType === 'gif';
	const IsLoading = state.isLoading;

	return (
		<div className='flex flex-col w-fit mb-8'>
			<div className='flex justify-end font-bold capitalize'>
				<button
					disabled={typePreviewIsPng}
					onClick={handleSetPreviewPng}
					type='button'
					className={`flex items-center gap-2 w-fit row-start-1 px-4 py-2 border border-zinc-700/20 border-r-0 border-b-0 rounded-lg rounded-b-none rounded-tr-none ${typePreviewIsPng ? 'text-zinc-700' : ''}`}>
					<ImageIcon className='size-4' />
					<span>Imagem</span>
				</button>
				<button
					disabled={typePreviewIsGif}
					onClick={handleSetPreviewGif}
					type='button'
					className={`flex items-center gap-2 w-fit row-start-1 px-4 py-2 border border-zinc-700/20 border-b-0 rounded-lg rounded-b-none rounded-tl-none ${typePreviewIsGif ? 'text-zinc-700' : ''}`}>
					<ImagePlay className='size-4' />
					<span>Gif</span>
				</button>
			</div>
			<div className='relative col-span-full row-start-2 row-end-3 max-h-[350px] max-w-[620px] '>
				{IsLoading && (
					<LoaderCircle className='animation-loading-spin text-blue-600' />
				)}
				<Image
					width={619}
					height={350}
					onLoad={handlePreviewCompleteLoad}
					className={`rounded-lg rounded-tr-none border border-zinc-700/20 transition-opacity object-cover w-full ${IsLoading ? 'opacity-20' : ''}`}
					loading='lazy'
					src={state.preview}
					alt=''
				/>
			</div>
		</div>
	);
}
