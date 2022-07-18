import type { LinksFunction } from '@remix-run/node';
import { Link, NavLink } from '@remix-run/react';

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

function getNavLinkClassName(isActive: boolean): string {
	return `portfolio-navigation-link ${
		isActive ? 'portfolio-navigation-link-active' : ''
	}`;
}

export default function Navigation({ projects }: NavigationProps) {
	return (
		<nav className={'portfolio-navigation'}>
			<ul className={'portfolio-navigation-list'}>
				<li key={'about'} className={'portfolio-navigation-list-item'}>
					<NavLink
						to={'about'}
						className={({ isActive }) => getNavLinkClassName(isActive)}
					>
						About Me
					</NavLink>
				</li>
				<li key={'github'} className={'portfolio-navigation-list-item'}>
					<a
						href={'https://github.com/MarcDonald'}
						className={'portfolio-navigation-link'}
					>
						GitHub
					</a>
				</li>
				<li key={'twitter'} className={'portfolio-navigation-list-item'}>
					<a
						href={'https://twitter.com/DeveloperMarc'}
						className={'portfolio-navigation-link'}
					>
						Twitter
					</a>
				</li>
				<hr />
				<h3>Projects</h3>
				{projects.map((project) => (
					<li key={project.id} className={'portfolio-navigation-list-item'}>
						<NavLink
							to={project.id}
							className={({ isActive }) => getNavLinkClassName(isActive)}
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
