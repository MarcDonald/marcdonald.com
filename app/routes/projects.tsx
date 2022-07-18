// noinspection JSUnusedGlobalSymbols

import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import projects from '~/assets/projects.json';
import { Aside, links as AsideLinks } from '~/components/Projects/Aside';
import { Header, links as HeaderLinks } from '~/components/Projects/Header';
import {
	links as NavigationLinks,
	Navigation,
} from '~/components/Projects/Navigation';
import type Project from '~/models/Project';
import styles from '~/styles/index.css';

export const links: LinksFunction = () => {
	return [
		...HeaderLinks(),
		...AsideLinks(),
		...NavigationLinks(),
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

export default function ProjectsParentRoute() {
	const data = useLoaderData<LoaderData>();

	return (
		<div className={'grid'}>
			<Header />
			<Aside />
			<Outlet />
			<Navigation projects={data.projects} />
		</div>
	);
}
