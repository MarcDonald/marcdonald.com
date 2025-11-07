import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
} from '@/app/components/ui/typography';
import ProjectList from '@/app/components/project-list';
import BlogList from '@/app/components/blog-list';
import { ArrowRight } from 'lucide-react';
import { sortedBlogPosts } from '@/app/config/blog';

export default function Home() {
	return (
		<>
			<div className={'flex w-full flex-col items-center border-b text-center'}>
				<TypographyH1
					className={'text-7xl sm:text-7xl md:text-8xl lg:text-9xl'}
					id={'main-content'}
					tabIndex={-1}
				>
					Hey There
				</TypographyH1>
				<TypographyH2 className={'border-none text-2xl'}>
					I like to make things with TypeScript and React
				</TypographyH2>
			</div>
			<div className={'flex flex-col'}>
				{sortedBlogPosts.length > 0 && (
					<section>
						<TypographyH3 className={'mt-4 mb-2'}>Blog Posts</TypographyH3>
						<BlogList maxItems={5} />
						{sortedBlogPosts.length > 5 && (
							<TypographyLink
								href={'/blog'}
								aria-label={'View all blog posts'}
								className={'mt-4 flex w-fit flex-row gap-1 hover:gap-2'}
							>
								See More <ArrowRight />
							</TypographyLink>
						)}
					</section>
				)}
				<section>
					<TypographyH3 className={'mt-4 mb-2'}>Projects</TypographyH3>
					<ProjectList />
				</section>
			</div>
		</>
	);
}
