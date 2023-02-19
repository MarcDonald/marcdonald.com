import { useEffect, useState } from 'react';

import { cn } from '~/util/style.util';

export default function Header() {
	const [animateHeader, setAnimateHeader] = useState(false);

	useEffect(() => {
		const listener = () => {
			if (window.scrollY > 140) {
				setAnimateHeader(true);
			} else {
				setAnimateHeader(false);
			}
		};
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, []);

	return (
		<div
			className={cn(
				'sticky grid h-32 place-content-center bg-black p-2 transition-all duration-500 ease-in-out dark:text-white',
				animateHeader
					? 'top-4 mx-8 rounded-3xl bg-black py-2'
					: 'top-64 mx-2 rounded-md'
			)}
		>
			<h1
				className={cn(
					'text-center font-display transition-all duration-500 ease-in-out',
					animateHeader ? 'text-4xl' : 'text-5xl'
				)}
			>
				Marc Donald
			</h1>
			<h2
				className={cn(
					'mt-3 text-center transition-all duration-500 ease-in-out',

					animateHeader ? 'text-lg' : 'text-2xl'
				)}
			>
				Software Engineer
			</h2>
		</div>
	);
}
