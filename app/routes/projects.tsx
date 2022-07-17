// noinspection JSUnusedGlobalSymbols

import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import { Header, links as HeaderLinks } from '~/components/Projects/Header';
import {
	links as NavigationLinks,
	Navigation,
} from '~/components/Projects/Navigation';
import {
	links as SocialAsideLinks,
	SocialAside,
} from '~/components/Projects/SocialAside';
import styles from '~/styles/index.css';

export const links: LinksFunction = () => {
	return [
		...HeaderLinks(),
		...SocialAsideLinks(),
		...NavigationLinks(),
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

export default function Projects() {
	return (
		<div className={'grid'}>
			<Header />
			<SocialAside />
			<Outlet />
			<Navigation />
		</div>
	);
}
