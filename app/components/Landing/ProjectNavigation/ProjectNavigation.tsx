import type { LinksFunction } from '@remix-run/node';

import styles from './ProjectNavigation.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function ProjectNavigation() {
	return (
		<nav className={'project-nav'}>
			<ul>
				<li>
					<a href={'#'}>Project 1</a>
				</li>
				<li>
					<a href={'#'}>Project 2</a>
				</li>
				<li>
					<a href={'#'}>Project 3</a>
				</li>
			</ul>
		</nav>
	);
}
