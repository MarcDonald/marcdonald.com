// noinspection JSUnusedGlobalSymbols

import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
	return redirect('/portfolio/about');
};

export default function DefaultProjectRoute() {
	useLoaderData();
	return <></>;
}
