import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center gap-2 h-full justify-center'>
			<div className='flex gap-2'>
				<ShieldAlert className='size-6 animate-pulse' />
				<span className='font-semibold max-w-96 text-center'>A pagina não foi encontrada. Clique no botão abaixo para voltar a pagina principal</span>
			</div>
			<Link href='/'>
				<button
					title='voltar'
					type='button'
					className='inline font-bold rounded-lg px-8 py-2 bg-blue-600'>
					Voltar
				</button>
			</Link>
		</div>
	);
}
