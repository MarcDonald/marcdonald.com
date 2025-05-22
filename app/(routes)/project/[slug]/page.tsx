import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/app/components/ui/separator';
import { Mdx } from '@/app/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import DownloadSection from '@/app/(routes)/project/[slug]/_components/download-section';
import { TypographyH1, TypographyLarge } from '@/app/components/ui/typography';
import { siteConfig } from '@/app/config/site';
import ProjectHeaderShell from '@/app/(routes)/project/[slug]/_components/project-header-shell';
import ScrollProgressBar from '@/app/components/scroll-progress-bar';
import { AnchorButton } from '@/app/components/anchor-button';
import { Button } from '@/app/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata(
	props: ProjectPageProps
): Promise<Metadata> {
	const params = await props.params;
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
		alternates: {
			canonical: `${siteConfig.url}/project/${params.slug}`,
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
	return allProjects.map((proj) =>
		Promise.resolve({
			slug: proj.slugAsParams,
		})
	);
}

export default async function ProjectPage(props: ProjectPageProps) {
	const params = await props.params;
	const proj = await getProjectFromParams(params);

	if (!proj) {
		notFound();
	}

	const { title, description, link, downloadGitHubSlug } = proj;

	return (
		<article>
			<ScrollProgressBar />
			<ProjectHeaderShell>
				<div className={'flex items-center justify-between'}>
					<TypographyH1
						className={'group scroll-m-20'}
						id={'main-content'}
						tabIndex={-1}
					>
						<Balancer>{title}</Balancer>
						<AnchorButton className={'self-center'} />
					</TypographyH1>
					{link && !downloadGitHubSlug && (
						<Link href={link} legacyBehavior passHref>
							<Button className={'hidden sm:flex'}>
								<span>View</span>
								<ExternalLink className={'h-5 w-5 sm:ml-2'} />
							</Button>
						</Link>
					)}
				</div>
				{description && (
					<TypographyLarge
						className={
							'scroll-m-20 border-b-0 pb-2 font-display text-xl font-semibold tracking-tight text-muted-foreground transition-colors first:mt-0'
						}
					>
						<Balancer>{description}</Balancer>
					</TypographyLarge>
				)}
				{link && !downloadGitHubSlug && (
					<Link href={link} legacyBehavior passHref>
						<Button className={'w-full sm:hidden'}>
							View
							<ExternalLink className={'ml-2 h-5 w-5'} />
						</Button>
					</Link>
				)}
				{downloadGitHubSlug && (
					<DownloadSection githubSlug={downloadGitHubSlug} />
				)}
			</ProjectHeaderShell>
			<Separator className="my-4 md:my-6" />
			<Mdx code={proj.body.code} />
		</article>
	);
}
