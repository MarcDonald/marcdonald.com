import {
	Sigithub,
	Simastodon,
	Sitwitter,
} from '@icons-pack/react-simple-icons';
import { useEffect, useState } from 'react';
import { ArrowDown } from 'react-feather';

import Header from '~/components/Header/Header';

export default function AppWrapper() {
	const [expandHeader, setExpandHeader] = useState(false);

	useEffect(() => {
		const listener = () => {
			setExpandHeader(window.scrollY > 240);
		};
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, []);

	return (
		<div className={'relative'}>
			<Header expanded={expandHeader} />
			<div className={'-mt-96 h-screen'}>
				<div className={'flex h-full w-full flex-col justify-end p-4 pb-8'}>
					<div className={'flex flex-row justify-evenly gap-4'}>
						<a
							href={'https://github.com/MarcDonald'}
							className={
								'my-2 block rounded-lg bg-gray-200 p-4 text-center text-xl'
							}
						>
							<Sigithub />
						</a>
						<a
							href={'https://twitter.com/DeveloperMarc'}
							className={
								'my-2 block rounded-lg bg-gray-200 p-4 text-center text-xl'
							}
						>
							<Sitwitter />
						</a>
						<a
							href={'https://techhub.social/@MarcDonald'}
							className={
								'my-2 block rounded-lg bg-gray-200 p-4 text-center text-xl'
							}
						>
							<Simastodon />
						</a>
					</div>
					<div>
						<p
							className={'my-2 rounded-lg bg-gray-200 p-4 text-center text-xl'}
						>
							Projects
						</p>
						<ArrowDown className={'mt-4 w-full'} size={48} />
					</div>
				</div>
			</div>
			<div className={'h-screen p-2'}>
				<div>
					<h3 id={'project-1'} className={'text-center font-display text-4xl'}>
						Project 1
					</h3>
					<section>
						<p>A thingy bop ba dee</p>
						<img alt={'test'} src={'https://placekitten.com/400/400'} />
					</section>
				</div>
			</div>
			<div className={'h-screen p-2'}>
				<div>
					<h3 className={'text-center font-display text-4xl'}>Project 2</h3>
					<section>
						<p>A thingy bop ba dee</p>
						<img alt={'test'} src={'https://placekitten.com/400/400'} />
					</section>
				</div>
			</div>
			<div className={'h-screen p-2'}>
				<div className={'h-full'}>
					<h3 className={'text-center font-display text-4xl'}>Project 3</h3>
					<section>
						<p>A thingy bop ba dee</p>
						<img alt={'test'} src={'https://placekitten.com/400/400'} />
					</section>
				</div>
			</div>
		</div>
	);
}
