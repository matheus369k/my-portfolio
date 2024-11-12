'use client';

import type { ProjectImageUrl } from '@/_types';
import { ImageIcon, ImagePlay, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { useReducer } from 'react';

interface ReducerState {
	preview: string;
	fileType: 'gif' | 'png';
	isLoading: boolean;
}

interface ReducerAction {
	type: 'TOGGLE_PREVIEW' | 'STOP_LOADING';
	payload: ReducerState | { isLoading: boolean };
}

const reducer = (state: ReducerState, action: ReducerAction) => {
	switch (action.type) {
		case 'TOGGLE_PREVIEW':
			return {
				preview: (action.payload as ReducerState).preview,
				fileType: (action.payload as ReducerState).fileType,
				isLoading: true,
			};
		case 'STOP_LOADING':
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export function ProjectPreview({ png, gif }: ProjectImageUrl) {
	const [state, dispatch] = useReducer(reducer, {
		preview: png,
		fileType: 'png',
		isLoading: true,
	});

	function handleSetPreviewPng() {
		dispatch({
			type: 'TOGGLE_PREVIEW',
			payload: { fileType: 'png', preview: png, isLoading: true },
		});
	}
	function handleSetPreviewGif() {
		dispatch({
			type: 'TOGGLE_PREVIEW',
			payload: { fileType: 'gif', preview: gif, isLoading: true },
		});
	}

	function handlePreviewCompleteLoad() {
		dispatch({
			type: 'STOP_LOADING',
			payload: { isLoading: false },
		});
	}

	return (
		<div className='flex flex-col'>
			<div className='flex justify-end font-bold capitalize'>
				<button
					disabled={state.fileType === 'png'}
					onClick={handleSetPreviewPng}
					type='button'
					className={`flex items-center gap-2 w-fit row-start-1 px-4 py-2 border border-zinc-700/20 border-r-0 border-b-0 rounded-lg rounded-b-none rounded-tr-none ${state.fileType === 'png' ? 'text-zinc-700' : ''}`}>
					<ImageIcon className='size-4' />
					<span>Imagem</span>
				</button>
				<button
					disabled={state.fileType === 'gif'}
					onClick={handleSetPreviewGif}
					type='button'
					className={`flex items-center gap-2 w-fit row-start-1 px-4 py-2 border border-zinc-700/20 border-b-0 rounded-lg rounded-b-none rounded-tl-none ${state.fileType === 'gif' ? 'text-zinc-700' : ''}`}>
					<ImagePlay className='size-4' />
					<span>Gif</span>
				</button>
			</div>
			<div className='relative col-span-full row-start-2 row-end-3'>
				{state.isLoading && (
					<LoaderCircle className='animation-loading-spin text-blue-600' />
				)}
				<Image
					onLoad={handlePreviewCompleteLoad}
					className={`rounded-lg rounded-tr-none border border-zinc-700/20 transition-opacity h-[350px] w-[619px] ${state.isLoading ? 'opacity-20' : ''}`}
					loading='lazy'
					src={state.preview}
					width={619}
					height={350}
					alt=''
				/>
			</div>
		</div>
	);
}
