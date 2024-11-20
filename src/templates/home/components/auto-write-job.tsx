'use client';

import TypeIt from 'typeit-react';

export function AutoWriteJob() {
	return (
		<p className='text-left w-full font-semibold text-xl flex gap-2'>
			Eu sou um desenvolvedor
			<TypeIt
				className='text-blue-600 text-xl'
				options={{
					strings: ['Web', 'Front-End', 'React'],
					loop: true,
					waitUntilVisible: false,
					lifeLike: true,
					breakLines: false,
					startDelete: false,
					loopDelay: 15000,
					nextStringDelay: 15000,
					afterComplete: () => {
						return new Promise((resolve) => {
							setTimeout(() => {
								resolve(true);
							}, 15000);
						});
					},
					startDelay: 0,
					speed: 50,
				}}
			/>
		</p>
	);
}
