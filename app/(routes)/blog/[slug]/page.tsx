import { allBlogPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mdx } from '@/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import ProjectHeaderShell from '@/app/(routes)/project/[slug]/_components/project-header-shell';
import ScrollProgressBar from '@/components/scroll-progress-bar';

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

export default async function BlogPage({ params }: BlogPageProps) {
	const blog = await getBlogFromParams(params);

	if (!blog) {
		notFound();
	}

	const { title, description, date } = blog;

	return (
		<>
			<ScrollProgressBar />
			<ProjectHeaderShell>
				<h1 className={'inline scroll-m-20 text-4xl font-bold tracking-tight'}>
					<Balancer>{title}</Balancer>
				</h1>
				{description && (
					<p className="text-lg text-muted-foreground">
						<Balancer>{description}</Balancer>
					</p>
				)}
				<p className="text-xs text-muted-foreground">
					Published:{' '}
					{Intl.DateTimeFormat('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					}).format(new Date(date))}
				</p>
			</ProjectHeaderShell>
			<Separator className="my-4 md:my-6" />
			<Mdx code={blog.body.code} />
		</>
	);
}
