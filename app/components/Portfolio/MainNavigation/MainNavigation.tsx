import type { LinksFunction } from '@remix-run/node';
import { Link, NavLink } from '@remix-run/react';
import type { CSSProperties } from 'react';

import type Project from '~/models/Project';

import styles from './MainNavigation.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

interface MainNavigationProps {
	projects: Project[];
	style?: CSSProperties;
}

function getNavLinkClassName(isActive: boolean): string {
	return `portfolio-navigation-link ${
		isActive ? 'portfolio-navigation-link-active' : ''
	}`;
}

export default function MainNavigation(props: MainNavigationProps) {
	return (
		<nav className={'portfolio-navigation'} {...props}>
			<ul className={'portfolio-navigation-list'}>
				<li key={'about'} className={'portfolio-navigation-list-item'}>
					<NavLink
						prefetch={'intent'}
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
				{props.projects.map((project) => (
					<li key={project.id} className={'portfolio-navigation-list-item'}>
						<NavLink
							prefetch={'intent'}
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
						<Link prefetch={'intent'} to={'/contact'}>
							Contact
						</Link>
					</li>
					<li>
						<Link prefetch={'intent'} to={'/licenses'}>
							OSS Licenses
						</Link>
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
