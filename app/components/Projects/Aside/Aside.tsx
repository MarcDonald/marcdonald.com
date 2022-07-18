import type { LinksFunction } from '@remix-run/node';

import logo from 'public/favicons/default/favicon-196x196.png';

import styles from './Aside.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function Aside() {
	return (
		<aside className={'aside'}>
			<img src={logo} alt={'Logo - A large M in a rounded square'} />
		</aside>
	);
}
