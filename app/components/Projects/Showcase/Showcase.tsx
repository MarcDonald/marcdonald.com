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
				<div style={{ display: 'grid', placeContent: 'center', flex: 1 }}>
					<img
						src={'https://placekitten.com/300/300'}
						width={400}
						height={400}
						style={{
							backgroundColor: 'red',
						}}
						alt={project.name}
					/>
				</div>
				<div className={'project-technologies-container'}>
					{project.technologies.map((tech) => (
						<span key={tech}>{tech}</span>
					))}
				</div>
				<a href={project.link}>Check it out here!</a>
			</div>
		</main>
	);
}
