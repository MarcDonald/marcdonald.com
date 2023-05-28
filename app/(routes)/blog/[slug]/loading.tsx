import React from 'react';
import { Separator } from '@/app/components/ui/separator';
import { Skeleton } from '@/app/components/ui/skeleton';
import BlogHeaderShell from '@/app/(routes)/blog/[slug]/_components/blog-header-shell';

export default async function BlogPageSkeleton() {
	return (
		<>
			<BlogHeaderShell>
				<Skeleton className="h-10 w-full md:w-[300px]" />
				<Skeleton className="h-6 w-64 md:w-[500px]" />
				<Skeleton className="h-5 w-24" />
			</BlogHeaderShell>
			<Separator className="my-4 md:my-6" />
			<Skeleton className="h-64 w-full" />
		</>
	);
}
