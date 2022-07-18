import type { LinksFunction } from '@remix-run/node';

import styles from './Header.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

function getAge(): number {
	const birthday = Date.UTC(1998, 12, 3);
	const now = new Date();
	const nowUTC = Date.UTC(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate()
	);

	const millisInDay = 1000 * 60 * 60 * 24;
	const daysInYear = 365.25;
	return Math.floor((nowUTC - birthday) / millisInDay / daysInYear);
}

export default function Header() {
	return (
		<header className={'name-header'}>
			<h1>Marc Donald</h1>
			<h2>Software Engineer, {getAge()}</h2>
		</header>
	);
}
