'use client';
import { Button } from '@/app/components/ui/button';
import { LinkIcon } from 'lucide-react';
import { VisuallyHidden } from '@/app/components/visually-hidden';
import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';
import { useRouter } from 'next/navigation';

export function AnchorButton({
	linkTo,
	icon,
	className,
}: {
	linkTo?: string;
	className?: string;
	icon?: ReactNode;
}) {
	const router = useRouter();
	return (
		<Button
			size={'icon'}
			variant={'ghost'}
			className={cn(
				'ml-4 text-transparent focus:text-muted-foreground group-hover:text-muted-foreground',
				className
			)}
			onClick={async () => {
				const indexOfHash = window.location.href.indexOf('#');
				let url = window.location.href;
				if (indexOfHash > 0) {
					url = window.location.href.substring(0, indexOfHash);
				}
				if (linkTo) {
					url = `${url}${linkTo ? '#' + linkTo : ''}`;
				}

				await navigator.clipboard.writeText(url);
				router.replace(url, {
					scroll: true,
				});
			}}
		>
			{icon ? icon : <LinkIcon className={'h-5 w-5'} />}
			<VisuallyHidden text={'Copy current URL to clipboard'} />
		</Button>
	);
}
