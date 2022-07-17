import type { LinksFunction } from '@remix-run/node';

import type Project from '~/models/Project';

import styles from './Showcase.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

interface ShowcaseProps {
	project: Project;
}

export default function Showcase({ project }: ShowcaseProps) {
	return (
		<main className={'project-showcase'}>
			<div className={'project'}>
				<h2>{project.name}</h2>
				<p>{project.description}</p>
				<a href={project.link}>Check it out here!</a>
			</div>
		</main>
	);
}
