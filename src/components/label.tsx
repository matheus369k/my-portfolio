interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ ...props }: LabelProps) {
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	return <label {...props} className='font-bold text-blue-600' />;
}
