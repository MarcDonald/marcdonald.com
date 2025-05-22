import { allBlogPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/app/components/ui/separator';
import { Mdx } from '@/app/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from '@/app/config/site';
import ProjectHeaderShell from '@/app/(routes)/project/[slug]/_components/project-header-shell';
import ScrollProgressBar from '@/app/components/scroll-progress-bar';
import {
	TypographyH1,
	TypographyLarge,
	TypographyMuted,
} from '@/app/components/ui/typography';
import { ShareButton } from '@/app/components/share-button';

interface BlogPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata(
	props: BlogPageProps
): Promise<Metadata> {
	const params = await props.params;
	const blog = await getBlogFromParams(params);

	if (!blog) {
		return {};
	}

	return {
		title: {
			default: blog.title,
			template: `%s - ${siteConfig.name}`,
		},
		description: blog.description,
		keywords: blog.keywords,
		twitter: {
			title: {
				default: blog.title,
				template: `%s - ${siteConfig.name}`,
			},
			description: blog.description,
			card: blog.image ? 'summary_large_image' : 'summary',
			images: blog.image
				? [
						{
							url: `${siteConfig.url}/${blog.image}`,
							width: 1200,
							height: 630,
							alt: blog.title,
						},
					]
				: [],
		},
		alternates: {
			canonical: `${siteConfig.url}/blog/${params.slug}`,
		},
		openGraph: {
			title: {
				default: blog.title,
				template: `%s - ${siteConfig.name}`,
			},
			description: blog.description,
			url: `${siteConfig.url}/blog/${params.slug}`,
			images: blog.image
				? [
						{
							url: `${siteConfig.url}/${blog.image}`,
							width: 1200,
							height: 630,
							alt: blog.title,
						},
					]
				: [],
		},
	};
}

async function getBlogFromParams(params: { slug: string }) {
	const slug = params.slug.toLowerCase();
	return allBlogPosts.find((blog) => blog.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<
	BlogPageProps['params'][]
> {
	return allBlogPosts.map((blog) =>
		Promise.resolve({
			slug: blog.slugAsParams,
		})
	);
}

function DraftBanner() {
	return (
		<div
			className={
				'sticky left-0 right-0 top-16 isolate z-40 -m-6 mb-6 flex h-6 items-center justify-center rounded-lg bg-red-800 text-white'
			}
		>
			DRAFT
		</div>
	);
}

const dateFormatter = Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

export default async function BlogPage(props: BlogPageProps) {
	const params = await props.params;
	const blog = await getBlogFromParams(params);

	if (!blog) {
		notFound();
	}

	const { title, description, date } = blog;

	return (
		<article className={'relative'}>
			<ScrollProgressBar />
			{!blog.published && <DraftBanner />}
			<ProjectHeaderShell>
				<div className={'flex justify-between gap-2'}>
					<TypographyH1
						className={'group scroll-m-20'}
						id={'main-content'}
						tabIndex={-1}
					>
						<Balancer>{title}</Balancer>
					</TypographyH1>
					<div className={'h-fit'}>
						<ShareButton
							link={`${siteConfig.url}/blog/${blog.slugAsParams}`}
							altText={'Share blog post'}
						/>
					</div>
				</div>
				{description && (
					<TypographyLarge
						className={
							'scroll-m-20 border-b-0 pb-2 font-display text-xl tracking-tight text-muted-foreground transition-colors first:mt-0'
						}
					>
						<Balancer>{description}</Balancer>
					</TypographyLarge>
				)}
			</ProjectHeaderShell>
			<TypographyMuted>
				{blog.published ? 'Published' : 'Draft'}:{' '}
				{dateFormatter.format(new Date(date))}{' '}
			</TypographyMuted>
			{blog.modifiedDate && (
				<TypographyMuted className={'text-xs italic'}>
					Last Modified: {dateFormatter.format(new Date(blog.modifiedDate))}
				</TypographyMuted>
			)}
			<Separator className="my-4" />
			<Mdx code={blog.body.code} />
		</article>
	);
}
