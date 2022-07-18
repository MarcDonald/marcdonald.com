// noinspection JSUnusedGlobalSymbols

import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Home } from 'react-feather';

import styles from '~/styles/contact.css';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};
export default function ContactRoute() {
	return (
		<div className={'container'}>
			<h1>Work in progress!</h1>
			<Link to={'/'} className={'back-home-link'}>
				<Home width={64} height={64} />
				<h2>Back Home</h2>
			</Link>
		</div>
	);
}
