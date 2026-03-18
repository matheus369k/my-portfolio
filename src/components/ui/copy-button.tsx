import { Check, Copy } from 'lucide-react';
import { i as MotionI } from 'motion/react-client';
import { useState, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type CopyButtonProps = InputHTMLAttributes<HTMLButtonElement> & {
	link: string;
};

export function CopyButton({ link, className, ...props }: CopyButtonProps) {
	const [isSuccessCopy, setIsSuccessCopy] = useState(false);

	async function handleCopyLinks() {
		try {
			await navigator.clipboard.writeText(link);
			setIsSuccessCopy(true);
		} finally {
			setTimeout(() => {
				setIsSuccessCopy(false);
			}, 1000);
		}
	}

	return (
		<button
			{...props}
			disabled={isSuccessCopy}
			onClick={handleCopyLinks}
			type='button'
			className={twMerge('group ml-auto', className)}
			aria-label='copy-button'>
			{!isSuccessCopy && (
				<MotionI initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<Copy className='size-6 text-blue-600 ' />
				</MotionI>
			)}

			{isSuccessCopy && (
				<MotionI initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<Check className='size-6 text-blue-600' />
				</MotionI>
			)}
		</button>
	);
}
