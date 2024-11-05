import { useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

export function Input({ name, ...props }: InputProps) {
	const { register } = useFormContext();

	return (
		<input
			{...props}
			{...register(name)}
			className='px-4 w-full py-2.5 rounded-lg border border-zinc-700 placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0'
		/>
	);
}
