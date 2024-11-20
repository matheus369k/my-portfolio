import { type FieldError, useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errors?: FieldError | undefined;
	name: string;
}

export function Input({ name, errors, ...props }: InputProps) {
	const { register } = useFormContext();
	const hasError = !!errors;

	return (
		<input
			{...props}
			{...register(name)}
			className={`px-4 w-full py-2.5 rounded-lg border placeholder:text-zinc-700 ring-0 bg-transparent focus:ring-0 ${hasError ? 'border-red-600' : ' border-zinc-700'}`}
		/>
	);
}
