import { allBlogPosts } from 'contentlayer/generated';

export const sortedBlogPosts = allBlogPosts
	.filter((b) => {
		// noinspection JSUnresolvedReference
		if (process.env.VERCEL_ENV === 'production') {
			return b.published;
		}
		return b;
	})
	.sort((first, second) => {
		return new Date(first.date).getTime() - new Date(second.date).getTime();
	})
	.reverse();
