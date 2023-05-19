import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import ProjectHeaderShell from '@/app/(routes)/project/[slug]/_components/project-header-shell';

export default async function ProjectPageSkeleton() {
	return (
		<>
			<ProjectHeaderShell>
				<Skeleton className="h-10 w-full md:w-[300px]" />
				<Skeleton className="h-6 w-64 md:w-[500px]" />
			</ProjectHeaderShell>
			<Separator className="my-4 md:my-6" />
			<Skeleton className="h-64 w-full" />
		</>
	);
}
