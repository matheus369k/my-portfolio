import type { FieldError } from 'react-hook-form';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	errors?: FieldError | undefined;
}

export function Label({ errors, children, ...props }: LabelProps) {
	return (
		<>
			{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
			<label {...props} className='font-bold text-blue-600'>
				{children}
			</label>
			{errors && (
				<p className='text-[var(--wrong-color)] text-xs ml-auto'>
					{errors.message}
				</p>
			)}
		</>
	);
}
