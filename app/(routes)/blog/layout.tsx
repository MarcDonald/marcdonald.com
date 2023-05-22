import React from 'react';
import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';

export default function BlogLayout({ children }: React.PropsWithChildren) {
	if (!siteConfig.showBlog) {
		notFound();
	}

	return <>{children}</>;
}
