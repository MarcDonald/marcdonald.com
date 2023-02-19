import type { PropsWithChildren } from 'react';

import { cn } from '~/util/style.util';

type HeaderProps = { expanded: boolean };

const Header = ({ expanded, ...props }: PropsWithChildren<HeaderProps>) => {
	return (
		<div
			className={cn(
				'static sticky top-4 mt-64 grid h-32 place-content-center bg-black p-2 transition-all duration-500 ease-in-out will-change-auto dark:text-white',
				expanded ? 'mx-8 rounded-3xl bg-black py-2' : 'mx-2 rounded-md'
			)}
			{...props}
		>
			<h1
				className={cn(
					'text-center font-display transition-all duration-500 ease-in-out',
					expanded ? 'text-4xl' : 'text-5xl'
				)}
			>
				Marc Donald
			</h1>
			<h2
				className={cn(
					'mt-3 text-center transition-all duration-500 ease-in-out',

					expanded ? 'text-lg' : 'text-2xl'
				)}
			>
				Software Engineer
			</h2>
		</div>
	);
};

export default Header;
