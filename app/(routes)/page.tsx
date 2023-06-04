import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
} from '@/app/components/ui/typography';
import ProjectList from '@/app/components/project-list';
import BlogList from '@/app/components/blog-list';
import { siteConfig } from '@/app/config/site';
import { ArrowRight } from 'lucide-react';

const showBlog = siteConfig.showBlog;

export default function Home() {
	return (
		<>
			<TypographyH1>Marc Donald</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<div className={'md:grid md:grid-cols-2'}>
				{showBlog && (
					<section>
						<TypographyH3 className={'mb-2 mt-4'}>
							Here's some things I've wrote
						</TypographyH3>
						<BlogList maxItems={5} />
						<TypographyLink
							href={'/blog'}
							aria-label={'View all blog posts'}
							className={'mt-4 flex w-fit flex-row gap-1 hover:gap-2'}
						>
							See More <ArrowRight />
						</TypographyLink>
					</section>
				)}
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
