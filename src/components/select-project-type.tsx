'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { usePathname, useRouter } from 'next/navigation';

type ProjectType = {
	type: 'all' | 'full-stack' | 'landing-page';
	hasDivision: boolean;
	text: string;
};

const projectsType: ProjectType[] = [
	{ type: 'all', text: 'Todos', hasDivision: true },
	{ type: 'full-stack', text: 'Full Stack', hasDivision: true },
	{ type: 'landing-page', text: 'Landing Page', hasDivision: false },
];

export function SelectTypeProjects() {
	const projectType = usePathname().split('/projects/')?.[1] || 'all';
	const router = useRouter();

	function handleChange(event: SelectChangeEvent) {
		router.push(`/projects/${event.target.value}`);
	}

	function renderProjectTypeItemsUI({ text, type, hasDivision }: ProjectType) {
		return (
			<MenuItem
				key={type}
				divider={hasDivision}
				classes={{
					divider: 'border border-zinc-700 focus:border-b-zinc-700',
					root: 'font-bold h-12 p-0 hover:bg-zinc-900 outline-none focus:outline-none',
					selected:
						'bg-zinc-900 focus:bg-zinc-900 hover:bg-zinc-900 text-zinc-100 outline-none focus:outline-none',
				}}
				style={{ backgroundColor: '#18181b' }}
				value={type}>
				{text}
			</MenuItem>
		);
	}

	return (
		<Box
			className='flex items-center font-bold absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-zinc-700 border rounded-md border-t-zinc-900 rounded-t-none overflow-hidden bg-zinc-900 z-50'
			sx={{ width: 208 }}>
			<FormControl
				variant='standard'
				fullWidth
				className='bg-zinc-900 z-50 border-none hover:border-none hover:before:border-none'>
				<Select
					fullWidth
					classes={{
						root: 'z-50 font-bold',
						icon: 'text-blue-500 mr-4',
						select: 'w-52 pl-4 py-2 text-blue-500',
					}}
					className=' border-none focus:border-none after:hidden before:hidden'
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					MenuProps={{
						classes: {
							list: 'bg-zinc-900 text-zinc-400 font-bold focus:border-zinc-700 px-4 py-0 ',
							paper: 'mt-5 bg-zinc-900 outline-none focus:outline-none',
						},
					}}
					defaultValue={projectType}
					label='type'
					sx={{ all: 'unset' }}
					onChange={handleChange}>
					{projectsType.map(renderProjectTypeItemsUI)}
				</Select>
			</FormControl>
		</Box>
	);
}
