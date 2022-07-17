import type { LinksFunction } from '@remix-run/node';

import styles from './SocialAside.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function SocialAside() {
	return (
		<aside className={'social-aside'}>
			<ul>
				<li>
					<a href={'#'}>Link 1</a>
				</li>
				<li>
					<a href={'#'}>Link 2</a>
				</li>
				<li>
					<a href={'#'}>Link 3</a>
				</li>
			</ul>
		</aside>
	);
}
