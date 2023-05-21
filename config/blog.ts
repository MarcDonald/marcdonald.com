import { allBlogPosts } from 'contentlayer/generated';

export const sortedPosts = allBlogPosts
	.filter((b) => b.published)
	.sort((first, second) => {
		return new Date(first.date).getTime() - new Date(second.date).getTime();
	})
	.reverse();
