import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mdx } from '@/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import DownloadSection from '@/components/download-section';
import { TypographyLink } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';

interface ProjectPageProps {
	params: {
		slug: string[];
	};
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const project = await getProjectFromParams(params);

	if (!project) {
		return {};
	}

	return {
		title: project.title,
		description: project.description,
		keywords: project.keywords,
		twitter: {
			title: project.title,
			description: project.description,
		},
		openGraph: {
			title: project.title,
			description: project.description,
			url: `${siteConfig.url}/project/${buildSlugFromParams(params)}`,
		},
	};
}

function buildSlugFromParams(params: { slug: string[] }) {
	return params.slug?.join('/') || '';
}

async function getProjectFromParams(params: { slug: string[] }) {
	const slug = buildSlugFromParams(params);
	const project = allProjects.find((proj) => proj.slugAsParams === slug);

	if (!project) {
		notFound();
	}

	return project;
}

export async function generateStaticParams(): Promise<
	ProjectPageProps['params'][]
> {
	return allProjects.map((proj) => ({
		slug: proj.slugAsParams.split('/'),
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const proj = await getProjectFromParams(params);

	if (!proj) {
		notFound();
	}

	const { title, description, link, downloadGitHubSlug } = proj;

	return (
		<>
			<div className="mx-auto w-full min-w-0">
				<div className="space-y-2">
					<TypographyLink href={link ?? '#'} className={'pb-1'}>
						<h1
							className={'inline scroll-m-20 text-4xl font-bold tracking-tight'}
						>
							{title}
						</h1>
					</TypographyLink>
					{description && (
						<p className="text-lg text-muted-foreground">
							<Balancer>{description}</Balancer>
						</p>
					)}
				</div>
				{downloadGitHubSlug && (
					<DownloadSection githubSlug={downloadGitHubSlug} />
				)}
			</div>
			<Separator className="my-4 md:my-6" />
			<Mdx code={proj.body.code} />
		</>
	);
}
