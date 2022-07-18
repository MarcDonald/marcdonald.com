import type { LinksFunction } from '@remix-run/node';
import { NavLink, Link } from '@remix-run/react';

import type Project from '~/models/Project';

import styles from './Navigation.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

interface NavigationProps {
	projects: Project[];
}

export default function Navigation({ projects }: NavigationProps) {
	return (
		<nav className={'projects-navigation'}>
			<ul className={'projects-navigation-list'}>
				<li key={'about'} className={'projects-navigation-list-item'}>
					<NavLink
						to={'about'}
						className={({ isActive }) =>
							`projects-navigation-link ${
								isActive ? 'projects-navigation-link-active' : undefined
							}`
						}
					>
						About Me
					</NavLink>
				</li>
				<li key={'github'} className={'projects-navigation-list-item'}>
					<a
						href={'https://github.com/MarcDonald'}
						className={'projects-navigation-link'}
					>
						GitHub
					</a>
				</li>
				<li key={'github'} className={'projects-navigation-list-item'}>
					<a
						href={'https://twitter.com/DeveloperMarc'}
						className={'projects-navigation-link'}
					>
						Twitter
					</a>
				</li>
				<hr />
				<h3>Projects</h3>
				{projects.map((project) => (
					<li key={project.id} className={'projects-navigation-list-item'}>
						<NavLink
							to={project.id}
							className={({ isActive }) =>
								`projects-navigation-link ${
									isActive ? 'projects-navigation-link-active' : undefined
								}`
							}
						>
							{project.name}
						</NavLink>
					</li>
				))}
			</ul>
			<footer>
				<ul>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
					<li>
						<Link to={'/licenses'}>OSS Licenses</Link>
					</li>
					<li>
						<a href={'https://github.com/MarcDonald/marcdonald.com'}>
							Code for This Site
						</a>
					</li>
				</ul>
			</footer>
		</nav>
	);
}
