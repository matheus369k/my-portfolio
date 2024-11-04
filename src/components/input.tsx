interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
	return (
		<input
			{...props}
			className='px-4 w-full py-2.5 rounded-lg border border-zinc-700 placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0'
		/>
	);
}
