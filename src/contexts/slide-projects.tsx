'use client';

import { createContext, useReducer } from 'react';

type CurrentSlideType = { currentSlide: number };

type ReducerActionsTypes = 'replace/current';

interface StateType extends CurrentSlideType {
	initialSlide: number;
}

interface ActionType {
	type: ReducerActionsTypes;
	payload: CurrentSlideType;
}

interface SlideProjectsContextType {
	state: StateType;
	handleSetCurrentSlide: ({ currentSlide }: CurrentSlideType) => void;
}

export const slideProjectsContext = createContext(
	{} as SlideProjectsContextType,
);

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'replace/current':
			return {
				...state,
				currentSlide: action.payload.currentSlide,
			};
		default:
			return state;
	}
};

const initialReducer: StateType = {
	currentSlide: 0,
	initialSlide: 0,
};

export function SlideProjectsContextProvider({
	children,
}: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(
		reducer,
		initialReducer,
		handleInitialReducer,
	);

	function handleInitialReducer(initialReducer: StateType) {
		if (typeof window === 'undefined') return { ...initialReducer };

		const url = new URL(window.location.toString());
		const index = Number(url.searchParams.get('index'));

		return {
			currentSlide: 0,
			initialSlide: index,
		} as StateType;
	}

	function handleSetCurrentSlide({ currentSlide }: CurrentSlideType) {
		dispatch({ type: 'replace/current', payload: { currentSlide } });
	}

	return (
		<slideProjectsContext.Provider value={{ state, handleSetCurrentSlide }}>
			{children}
		</slideProjectsContext.Provider>
	);
}
