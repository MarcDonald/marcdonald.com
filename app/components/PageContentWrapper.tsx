import { type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

const PageContentWrapper = ({
	children,
	className,
	...props
}: PropsWithChildren & { className?: string }) => {
	return (
		<main className={cn('m-4', className)} {...props}>
			{children}
		</main>
	);
};

export default PageContentWrapper;
