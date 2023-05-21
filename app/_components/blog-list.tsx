import {
	TypographyLink,
	TypographyMuted,
	TypographyP,
} from '@/components/ui/typography';
import { BlogPost } from 'contentlayer/generated';
import { cn } from '@/lib/utils';
import { sortedPosts } from '@/config/blog';

const BlogLink = ({ blog }: { blog: BlogPost }) => {
	return (
		<li className={'p-2'}>
			<TypographyP>
				<TypographyLink href={`/blog/${blog.slugAsParams}`}>
					{blog.title}
				</TypographyLink>
			</TypographyP>
			<TypographyMuted>{blog.description}</TypographyMuted>
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
			{sortedPosts.slice(0, maxItems).map((blog) => (
				<BlogLink key={blog.slug} blog={blog} />
			))}
		</ul>
	);
}
