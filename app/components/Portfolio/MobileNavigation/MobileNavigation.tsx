import type { LinksFunction } from '@remix-run/node';
import { NavLink } from '@remix-run/react';
import type { CSSProperties } from 'react';

import type Project from '~/models/Project';

import styles from './MobileNavigation.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

interface MobileNavigationProps {
	projects: Project[];
	style?: CSSProperties;
}

function getNavLinkClassName(isActive: boolean): string {
	return `mobile-navigation-link ${
		isActive ? 'mobile-navigation-link-active' : ''
	}`;
}

export default function MobileNavigation(props: MobileNavigationProps) {
	return (
		<nav className={'mobile-nav'} {...props}>
			<ul className={'mobile-navigation-list'}>
				{props.projects.map((project) => (
					<li key={project.id} className={'mobile-navigation-list-item'}>
						<NavLink
							prefetch={'intent'}
							to={project.id}
							className={({ isActive }) => getNavLinkClassName(isActive)}
						>
							{project.name}
						</NavLink>
					</li>
				))}
				<hr />
				<li key={'about'} className={'mobile-navigation-list-item'}>
					<NavLink
						prefetch={'intent'}
						to={'about'}
						className={({ isActive }) => getNavLinkClassName(isActive)}
					>
						About Me
					</NavLink>
				</li>
				<li key={'github'} className={'mobile-navigation-list-item'}>
					<a
						href={'https://github.com/MarcDonald'}
						className={'mobile-navigation-link'}
					>
						GitHub
					</a>
				</li>
				<li key={'twitter'} className={'mobile-navigation-list-item'}>
					<a
						href={'https://twitter.com/DeveloperMarc'}
						className={'mobile-navigation-link'}
					>
						Twitter
					</a>
				</li>
			</ul>
		</nav>
	);
}
