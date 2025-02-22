import React from 'react';
import { cn } from '@/app/lib/utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('animate-pulse bg-muted', className)} {...props} />;
}

export { Skeleton };
