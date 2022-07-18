// noinspection JSUnusedGlobalSymbols

import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useCatch, useLoaderData, useParams } from '@remix-run/react';

import projects from '~/assets/projects.json';
import {
	links as ShowcaseLinks,
	Showcase,
} from '~/components/Portfolio/Showcase';
import type Project from '~/models/Project';
import styles from '~/styles/portfolio-project.css';

type LoaderData = {
	project: Project;
};

export const loader: LoaderFunction = async ({ params }) => {
	const urlProject = params.projectId;

	if (urlProject) {
		const project = projects.find((p) => {
			return p.id === urlProject;
		});
		if (project) {
			const data: LoaderData = {
				project,
			};
			return json(data);
		}
	}

	throw new Response('Project Not Found', {
		status: 404,
	});
};

export const links: LinksFunction = () => {
	return [
		...ShowcaseLinks(),
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

export default function ProjectShowcaseRoute() {
	const data = useLoaderData<LoaderData>();
	return <Showcase project={data.project} />;
}

export function CatchBoundary() {
	const caught = useCatch();

	if (caught.status === 404) {
		return (
			<div className={'error-container'}>
				<h2>
					I have no idea what that project is
					<br />
					Try a different one
				</h2>
			</div>
		);
	} else {
		throw new Error(`Unhandled error: ${caught.status}`);
	}
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error);

	const { projectId } = useParams();
	return (
		<div className={'error-container'}>
			<h2>
				{`There was an error loading project by the id ${projectId}`}
				<br />
				Try a different one
			</h2>
		</div>
	);
}
