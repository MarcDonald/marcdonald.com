// noinspection JSUnusedGlobalSymbols

import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
	return redirect('https://v1.marcdonald.com/hibi-privacy-policy.html');
};

export default function HibiPrivacyPolicy() {
	useLoaderData();
	return <></>;
}
