import { TypographyH1, TypographyH2 } from '@/app/components/ui/typography';
import BlogList from '@/app/components/blog-list';
import { Metadata } from 'next';
import { siteConfig } from '@/app/config/site';

export const metadata: Metadata = {
	title: 'Blog Posts',
	description: "Some things I've written",
	alternates: {
		canonical: `${siteConfig.url}/blog`,
	},
};

export default function BlogParentRoute() {
	return (
		<>
			<TypographyH1>Blog</TypographyH1>
			<TypographyH2>Here's some things I've written</TypographyH2>
			<BlogList className={'mt-4'} />
		</>
	);
}
