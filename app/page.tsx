import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
} from '@/components/ui/typography';
import ProjectList from '@/app/_components/project-list';
import BlogList from '@/app/_components/blog-list';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';

export default function Home() {
	return (
		<>
			<TypographyH1>Marc Donald</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<div className={'md:grid md:grid-cols-2'}>
				<section>
					<TypographyH3 className={'mb-2 mt-4'}>
						Here's some things I've wrote
					</TypographyH3>
					{siteConfig.showBlog ? <BlogList maxItems={5} /> : <></>}
					<TypographyLink
						href={'/blog'}
						className={'mt-4 flex w-fit flex-row gap-1 hover:gap-2'}
					>
						See More <ArrowRight />
					</TypographyLink>
				</section>
				<section>
					<TypographyH3 className={'mb-2 mt-4'}>
						Here's some things I've made
					</TypographyH3>
					<ProjectList />
				</section>
			</div>
		</>
	);
}
