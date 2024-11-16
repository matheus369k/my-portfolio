import { LoaderCircle } from 'lucide-react';

export default function Loading() {
	return (
		<div className='flex items-center gap-2 text-blue-600 h-full justify-center'>
			<LoaderCircle className='size-6 animate-spin' />
			<span className='font-semibold'>Carregando...</span>
		</div>
	);
}
