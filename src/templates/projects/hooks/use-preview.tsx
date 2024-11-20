'use client';

import type { ProjectImageUrl } from '@/@types';
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

export function usePreview({ png, gif }: ProjectImageUrl) {
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

	return {
		handleSetPreviewPng,
		handleSetPreviewGif,
		handlePreviewCompleteLoad,
		state,
	};
}
