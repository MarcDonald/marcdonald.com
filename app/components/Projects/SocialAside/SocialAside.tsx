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
					<a href={'https://twitter.com/DeveloperMarc'}>Twitter</a>
				</li>
				<li>
					<a href={'https://github.com/MarcDonald'}>GitHub</a>
				</li>
			</ul>
		</aside>
	);
}
