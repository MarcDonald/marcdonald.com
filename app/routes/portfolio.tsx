// noinspection JSUnusedGlobalSymbols

import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import projects from '~/assets/projects.json';
import { Header, links as HeaderLinks } from '~/components/Portfolio/Header';
import { Logo, links as LogoLinks } from '~/components/Portfolio/Logo';
import {
	links as MainNavigationLinks,
	MainNavigation,
} from '~/components/Portfolio/MainNavigation';
import {
	links as MobileNavigationLinks,
	MobileNavigation,
} from '~/components/Portfolio/MobileNavigation';
import type Project from '~/models/Project';
import styles from '~/styles/portfolio.css';

export const links: LinksFunction = () => {
	return [
		...HeaderLinks(),
		...LogoLinks(),
		...MainNavigationLinks(),
		...MobileNavigationLinks(),
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

type LoaderData = {
	projects: Project[];
};

export const loader: LoaderFunction = async () => {
	return json({ projects });
};

export default function PortfolioParentRoute() {
	const data = useLoaderData<LoaderData>();

	return (
		<div className={'grid'}>
			<Header style={{ gridArea: 'header' }} />
			<Logo style={{ gridArea: 'logo' }} />
			<div style={{ gridArea: 'content' }}>
				<Outlet />
			</div>
			<MainNavigation projects={data.projects} style={{ gridArea: 'nav' }} />
			<MobileNavigation projects={data.projects} style={{ gridArea: 'nav' }} />
		</div>
	);
}
