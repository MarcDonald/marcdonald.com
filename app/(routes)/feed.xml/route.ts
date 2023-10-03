import RSS from 'rss';
import { sortedBlogPosts } from '@/app/config/blog';
import { siteConfig } from '@/app/config/site';
import icon from '@/app/icon.png';

export async function GET() {
	const feed = new RSS({
		title: "Marc Donald's Blog",
		description: siteConfig.description,
		site_url: siteConfig.url,
		image_url: `${siteConfig.url}${icon.src}`,
		categories: [
			'software engineering',
			'blog',
			'technology',
			'react',
			'typescript',
			'webdev',
			'web development',
		],
		feed_url: `${siteConfig.url}/feed.xml`,
		copyright: 'Copyright 2023 Marc Donald',
		language: 'en',
	});

	sortedBlogPosts.forEach((post) => {
		feed.item({
			title: post.title,
			guid: `${siteConfig.url}/blog/${post.slugAsParams}`,
			url: `${siteConfig.url}/blog/${post.slugAsParams}`,
			date: post.date,
			description: post.description ?? '',
			author: siteConfig.creator.name,
			categories: post.keywords ?? [],
		});
	});
	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
}
