import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center gap-2 h-full justify-center'>
			<div className='flex items-center gap-2 text-red-600'>
                <ShieldAlert className='size-6 animate-pulse' />
                <span className='font-semibold'>A pagina não foi encontrada !</span>
            </div>
			<Link className='underline font-semibold text-zinc-400' href='/'>Voltar</Link>
		</div>
	);
}
