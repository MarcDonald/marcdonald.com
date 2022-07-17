import type { LinksFunction } from '@remix-run/node';

import styles from './Header.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function Header() {
	return (
		<header className={'name-header'}>
			<h1>Marc Donald</h1>
			<h2>Software Engineer</h2>
		</header>
	);
}
