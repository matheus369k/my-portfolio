'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
	error,
	reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className='flex flex-col gap-2 items-center justify-center h-full'>
			<p className='font-bold max-w-96 text-center'>
				Error ao tentar carregar... Clique no botão abaixo para recarregar a
				pagina.
			</p>
			<button
				title='recarregar'
				onClick={reset}
				type='button'
				className='inline font-bold rounded-lg px-8 py-2 bg-blue-600'>
				recarregar
			</button>
		</div>
	);
}
