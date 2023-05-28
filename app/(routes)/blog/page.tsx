import { TypographyH1, TypographyH2 } from '@/app/components/ui/typography';
import BlogList from '@/app/components/blog-list';

export default function BlogParentRoute() {
	return (
		<>
			<TypographyH1>Blog</TypographyH1>
			<TypographyH2>Here's some things I've wrote</TypographyH2>
			<BlogList className={'mt-4'} />
		</>
	);
}
