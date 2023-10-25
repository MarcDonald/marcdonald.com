import {
	TypographyLink,
	TypographyMuted,
	TypographyP,
} from '@/app/components/ui/typography';
import { BlogPost } from 'contentlayer/generated';
import { cn } from '@/app/lib/utils';
import { sortedBlogPosts } from '@/app/config/blog';
import Balancer from 'react-wrap-balancer';

const BlogLink = ({ blog }: { blog: BlogPost }) => {
	return (
		<li className={'p-2'}>
			<TypographyP className={'mb-2'}>
				<Balancer>
					<TypographyLink
						href={`/blog/${blog.slugAsParams}`}
						className={'font-bold'}
					>
						{blog.title}
					</TypographyLink>
				</Balancer>
			</TypographyP>
			<TypographyMuted className={'text-base'}>
				{blog.description}
			</TypographyMuted>
		</li>
	);
};
export default function BlogList({
	maxItems,
	className,
}: {
	maxItems?: number;
	className?: string;
}) {
	return (
		<ul className={cn('list-none p-0', className)}>
			{sortedBlogPosts.slice(0, maxItems).map((blog) => (
				<BlogLink key={blog.slug} blog={blog} />
			))}
		</ul>
	);
}
