import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mdx } from '@/components/ui/mdx';
import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';

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
		twitter: {
			title: project.title,
			description: project.description,
		},
	};
}

async function getProjectFromParams(params: { slug: string[] }) {
	const slug = params.slug?.join('/') || '';
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

	const { title, description } = proj;

	return (
		<main className="relative px-6 py-6 md:px-8 lg:gap-10 lg:py-8 xl:px-12">
			<div className="mx-auto w-full min-w-0">
				<div className="space-y-2">
					<h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
						{title}
					</h1>
					{description && (
						<p className="text-lg text-muted-foreground">
							<Balancer>{description}</Balancer>
						</p>
					)}
				</div>
			</div>
			<Separator className="my-4 md:my-6" />
			<Mdx code={proj.body.code} />
		</main>
	);
}
