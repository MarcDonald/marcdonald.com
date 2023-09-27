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
	TypographyH2,
	TypographyMuted,
} from '@/app/components/ui/typography';

interface BlogPageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
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
	return allBlogPosts.map((blog) => ({
		slug: blog.slugAsParams,
	}));
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

export default async function BlogPage({ params }: BlogPageProps) {
	const blog = await getBlogFromParams(params);

	if (!blog) {
		notFound();
	}

	const { title, description, date } = blog;

	return (
		<>
			<ScrollProgressBar />
			{!blog.published && <DraftBanner />}
			<ProjectHeaderShell>
				<TypographyH1 className={'scroll-m-20'}>
					<Balancer>{title}</Balancer>
				</TypographyH1>
				{description && (
					<TypographyH2 className={'border-b-0'}>
						<Balancer>{description}</Balancer>
					</TypographyH2>
				)}
			</ProjectHeaderShell>
			<TypographyMuted>
				{blog.published ? 'Published' : 'Draft'}:{' '}
				{Intl.DateTimeFormat('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				}).format(new Date(date))}
			</TypographyMuted>
			<Separator className="my-4" />
			<Mdx code={blog.body.code} />
		</>
	);
}
