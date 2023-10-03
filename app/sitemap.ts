import { siteConfig } from '@/app/config/site';
import { sortedBlogPosts } from '@/app/config/blog';
import { allProjects } from 'contentlayer/generated';

export default async function Sitemap() {
	const blogPosts = sortedBlogPosts.map((post) => ({
		url: `${siteConfig.url}/blog/${post.slugAsParams}`,
		lastModified: post.modifiedDate ?? post.date,
	}));

	const projects = allProjects.map((proj) => ({
		url: `${siteConfig.url}/project/${proj.slugAsParams}`,
		lastModified: proj.modifiedDate,
	}));

	return [
		{
			url: siteConfig.url,
			lastModified: new Date('2023-10-03T22:45'),
		},
		...blogPosts,
		...projects,
	];
}
