import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from '@remix-run/react';
import React from 'react';

import { BreakpointHelper } from '~/components/BreakpointHelper';
import DefaultFaviconLinks from '~/components/DefaultFaviconLinks';

import styles from './tailwind.css';

export const links: LinksFunction = () => {
	return [
		...DefaultFaviconLinks(),
		{ rel: 'me', href: 'https://techhub.social/@MarcDonald' },
		{ rel: 'me', href: 'https://twitter.com/DeveloperMarc' },
		{ rel: 'preconnect', href: 'https://rsms.me/' },
		{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
		{ rel: 'stylesheet', href: styles },
	];
};

export const meta: MetaFunction = () => {
	const description = 'Software Engineer';

	return {
		viewport: 'width=device-width,initial-scale=1',
		charset: 'utf-8',
		description,
		keywords:
			'marc donald,developer,portfolio,software engineer,android,kotlin,javascript,typescript,java',
		'twitter:creator': '@DeveloperMarc',
		'twitter:site': '@DeveloperMarc',
		'twitter:title': 'Marc Donald',
		'twitter:description': description,
	};
};

function Document({
	title = 'Marc Donald',
}: {
	children: React.ReactNode;
	title?: string;
}) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<title>{title}</title>
			</head>
			<body>
				<BreakpointHelper />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<h1>
				{caught.status} {caught.statusText}
			</h1>
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error);

	return (
		<Document title="Whoops">
			<h1>App Error</h1>
			<pre>{error.message}</pre>
		</Document>
	);
}
