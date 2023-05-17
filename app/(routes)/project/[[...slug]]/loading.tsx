import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default async function ProjectPageSkeleton() {
	return (
		<>
			<div className="mx-auto w-full min-w-0">
				<div className="space-y-2">
					<Skeleton className="h-10 w-full md:w-[300px]" />
					<Skeleton className="h-6 w-64 md:w-[500px]" />
				</div>
			</div>
			<Separator className="my-4 md:my-6" />
			<Skeleton className="h-64 w-full" />
		</>
	);
}
