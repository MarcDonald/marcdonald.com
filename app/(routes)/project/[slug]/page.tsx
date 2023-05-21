import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mdx } from '@/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import DownloadSection from '@/app/(routes)/project/[slug]/_components/download-section';
import { TypographyH1, TypographyLink } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';
import ProjectHeaderShell from '@/app/(routes)/project/[slug]/_components/project-header-shell';
import ScrollProgressBar from '@/components/scroll-progress-bar';

interface ProjectPageProps {
	params: {
		slug: string;
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
		title: {
			default: project.title,
			template: `%s - ${siteConfig.name}`,
		},
		description: project.description,
		keywords: project.keywords,
		twitter: {
			title: {
				default: project.title,
				template: `%s - ${siteConfig.name}`,
			},
			description: project.description,
			card: project.image ? 'summary_large_image' : 'summary',
			images: project.image
				? [
						{
							url: `${siteConfig.url}/${project.image}`,
							width: 1200,
							height: 630,
							alt: project.title,
						},
				  ]
				: [],
		},
		openGraph: {
			title: {
				default: project.title,
				template: `%s - ${siteConfig.name}`,
			},
			description: project.description,
			url: `${siteConfig.url}/project/${params.slug}`,
			images: project.image
				? [
						{
							url: `${siteConfig.url}/${project.image}`,
							width: 1200,
							height: 630,
							alt: project.title,
						},
				  ]
				: [],
		},
	};
}

async function getProjectFromParams(params: { slug: string }) {
	const slug = params.slug.toLowerCase();
	return allProjects.find((proj) => proj.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<
	ProjectPageProps['params'][]
> {
	return allProjects.map((proj) => ({
		slug: proj.slugAsParams,
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
			<ScrollProgressBar />
			<ProjectHeaderShell>
				<Balancer>
					<TypographyLink href={link ?? '#'} className={'pb-1'}>
						<TypographyH1 className={'scroll-m-20'}>
							<Balancer>{title}</Balancer>
						</TypographyH1>
					</TypographyLink>
				</Balancer>
				{description && (
					<p className="text-lg text-muted-foreground">
						<Balancer>{description}</Balancer>
					</p>
				)}
				{downloadGitHubSlug && (
					<DownloadSection githubSlug={downloadGitHubSlug} />
				)}
			</ProjectHeaderShell>
			<Separator className="my-4 md:my-6" />
			<Mdx code={proj.body.code} />
		</>
	);
}
