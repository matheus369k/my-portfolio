'use client';

import { slideProjectsContext } from "@/contexts/slide-projects";
import { useContext, useEffect } from "react";

interface UseVisibleSlideProps {
    index: number;
    slug: string;
}

export function useVisibleSlide({index, slug}: UseVisibleSlideProps) {
	const { handleSetCurrentSlide } = useContext(slideProjectsContext);

	useEffect(() => {
		ObserverContainer();
	}, []);

	function setQueryParams({ index }: { index: number }) {
		const url = new URL(window.location.toString());
		url.searchParams.set('index', index.toString());
		window.history.pushState({}, '', url.toString());
	}

	function callbackObserver(entries: IntersectionObserverEntry[]) {
		const isVisible = entries[0].isIntersecting;

		if (!isVisible) return;

		handleSetCurrentSlide({ currentSlide: index });
		setQueryParams({ index });
	}

	function ObserverContainer() {
		const projectElement = document.querySelector(
			`[data-slug='${slug}']`,
		);

		if (!projectElement) return;

		const optionObserver = { threshold: 0.9 };
		const observerInstance = new IntersectionObserver(
			callbackObserver,
			optionObserver,
		);

		observerInstance.observe(projectElement);
	}
}