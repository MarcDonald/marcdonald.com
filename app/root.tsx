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

import {
	BreakpointHelper,
	links as BreakpointHelperLinks,
} from '~/components/BreakpointHelper';
import DefaultFaviconLinks from '~/components/DefaultFaviconLinks';
import globalStylesUrl from '~/styles/app/global.css';
import styleResetUrl from '~/styles/app/reset.css';
import darkVariables from '~/styles/app/variables-dark.css';
import lightVariables from '~/styles/app/variables-light.css';

export const links: LinksFunction = () => {
	return [
		...DefaultFaviconLinks(),
		...BreakpointHelperLinks(),
		{
			rel: 'stylesheet',
			href: lightVariables,
			media: '(prefers-color-scheme: light)',
		},
		{
			rel: 'stylesheet',
			href: darkVariables,
			media: '(prefers-color-scheme: dark)',
		},
		{ rel: 'stylesheet', href: styleResetUrl },
		{
			rel: 'stylesheet',
			href: globalStylesUrl,
		},
	];
};

export const meta: MetaFunction = () => {
	const description = 'Software Engineer';

	return {
		viewport: 'width=device-width,initial-scale=1',
		charset: 'utf-8',
		description,
		keywords: 'marc donald,developer,portfolio,software engineer',
		'twitter:creator': '@DeveloperMarc',
		'twitter:site': '@DeveloperMarc',
		'twitter:title': 'Marc Donald',
		'twitter:description': description,
	};
};

function Document({
	children,
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
				{children}
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
