import type { LinksFunction } from '@remix-run/node';

import styles from './ProjectShowcase.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function ProjectShowcase() {
	return (
		<main className={'project-showcase'}>
			<div className={'project'}>
				<h2>Project Name</h2>
			</div>
		</main>
	);
}
