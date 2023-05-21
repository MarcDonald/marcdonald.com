import { TypographyH1, TypographyH2 } from '@/components/ui/typography';
import BlogList from '@/app/_components/blog-list';

export default function BlogParentRoute() {
	return (
		<>
			<TypographyH1>Blog</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<BlogList className={'mt-4'} />
		</>
	);
}
