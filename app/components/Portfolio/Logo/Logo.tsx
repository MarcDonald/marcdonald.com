import type { LinksFunction } from '@remix-run/node';

import logo from 'public/favicons/default/favicon-196x196.png';

import styles from './Logo.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function Logo(props: any) {
	return (
		<aside className={'logo-container'} {...props}>
			<img src={logo} alt={'Logo - A large M in a rounded square'} />
		</aside>
	);
}
