import { ContactLinks } from '@/components/contact/links';
import { ProfileAvatar } from '@/components/profile-avatar';
import { Title } from '@/components/title';

export default function AboutMePage() {
	return (
		<div className='flex flex-col gap-12'>
			<div className='flex flex-col gap-6'>
				<Title>Apresentação inicial</Title>
				<p className='text-zinc-400 pl-4'>
					Olá, me chamo Matheus gomes de melo, sou de Pernambuco e tenho 20 anos
					atualmente. Sou um dev autônomo, ou seja, buscou conteúdo e gerencio
					meus estudos de maneira independente. Minha area e desenvolvimento
					web, especificamente o front-end, contudo venho me aprofundado em
					conceitos relacionados a parte back-end da web.
				</p>
			</div>
			<div className='grid grid-cols-[auto,_1fr] grid-rows-[auto,_1fr] gap-6'>
				<Title>Início de carreira</Title>
				<ul className='flex flex-col gap-4 text-zinc-400'>
					<li>
						<span className='text-zinc-300 font-semibold'>
							10/2022 - 03/2023
						</span>
						<p className='pl-4'>
							Assim como boa parte dos dev, os games fora um incentivo inicial
							para entrar no mundo da programação. Tendo meu primeiro contato
							com a programação, por querer criar um jogo, acabei por assistir
							um vídeo que criava um jogo simples de terminal em Python, gostei
							tanto do conteúdo e da forma “game ficada” que fora explicado,
							que, fiz o curso completo (esse curso de Python era do canal
							“Curso em vídeo”).
						</p>
					</li>
					<li>
						<span className='text-zinc-300 font-semibold'>
							03/2023 - 07/2023
						</span>
						<p className='pl-4'>
							Passei vários meses estudando, contudo, eu estava estudando sem um
							objetivo em mente, ou seja, sem focar em uma carreira específica,
							foi aí que em maio de 2023 me deparei, com dois anúncios de
							eventos gratuitos para ter uma leve noção da área, o primeiro
							falavam, sobre o desenvolvimento web e outro era de análise de
							dados, participe de ambos, vendo um pouco na teoria e, na prática,
							ao finalizar os eventos, decidir focar na área de desenvolvimento
							web, por ser a que mais me atraiu.
						</p>
					</li>
					<li>
						<span className='text-zinc-300 font-semibold'>
							07/2023 - Atualmente
						</span>
						<p className='pl-4'>
							Desde então venho estudando, conceitos e ferramentas focadas na
							área, participando de eventos online, entrando em comunidades, e
							melhorando minhas redes e mais recentemente estudando um pouco de
							back, visando ampliar meus horizontes como dev web.
						</p>
					</li>
				</ul>
				<div className='flex flex-col items-center justify-center gap-4 row-span-full col-start-2'>
					<ProfileAvatar />
					<ContactLinks />
				</div>
			</div>
		</div>
	);
}
