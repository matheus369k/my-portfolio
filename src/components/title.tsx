export function Title({ title }: { title: string }) {
	return (
		<h1 className='text-3xl font-bold leading-relaxed pl-8 border-l-4 border-blue-600 rounded-lg'>
			{title}
		</h1>
	);
}
