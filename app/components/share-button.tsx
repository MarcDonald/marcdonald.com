'use client';

import { Button } from '@/app/components/ui/button';
import * as React from 'react';
import { cn } from '@/app/lib/utils';
import { ShareIcon } from 'lucide-react';
import { useToast } from '@/app/components/ui/use-toast';
import { motion, TargetAndTransition } from 'framer-motion';
import { VisuallyHidden } from '@/app/components/visually-hidden';
import posthog from 'posthog-js';

export interface ShareButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	link: string;
	altText?: string;
	className?: string;
}

const iconAnimation: TargetAndTransition = {
	scale: [1, 1.3, 1.1],
	transition: {
		duration: 0.5,
		times: [0, 0.5, 1],
	},
};

export function ShareButton({
	link,
	altText,
	className,
	...props
}: ShareButtonProps) {
	const { toast } = useToast();
	return (
		<Button
			className={cn(className)}
			onClick={async () => {
				console.log(`Share link: ${link}`);
				await navigator.clipboard.writeText(link);
				toast({
					title: 'Copied URL to clipboard',
				});

				posthog.capture('Share URL', {
					link,
				});

				if (
					window.navigator.canShare &&
					window.navigator.canShare({
						url: link,
					})
				) {
					await window.navigator.share({ url: link });
				}
			}}
			{...props}
		>
			<motion.div whileHover={iconAnimation} whileFocus={iconAnimation}>
				<ShareIcon className={'h-5 w-5'} />
				<VisuallyHidden text={altText ?? 'Share URL'} />
			</motion.div>
		</Button>
	);
}
