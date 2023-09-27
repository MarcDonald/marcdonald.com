import React from 'react';
import { notFound } from 'next/navigation';
import { sortedBlogPosts } from '@/app/config/blog';

export default function BlogLayout({ children }: React.PropsWithChildren) {
	if (sortedBlogPosts.length === 0) {
		notFound();
	}

	return <>{children}</>;
}
