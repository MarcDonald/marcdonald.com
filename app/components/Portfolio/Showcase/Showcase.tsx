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
		<div className={'project-showcase'}>
			<main className={'project'}>
				<h2 className={'project-name-header'}>{project.name}</h2>
				<section className={'project-description-container'}>
					<p>{project.description}</p>
				</section>
				<ul className={'project-technologies-container'}>
					{project.technologies.map((tech) => (
						<li key={tech}>
							<p>{tech}</p>
						</li>
					))}
				</ul>
				<a href={project.link} className={'showcase-cta'}>
					Check it out here!
				</a>
			</main>
		</div>
	);
}
