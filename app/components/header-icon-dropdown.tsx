'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import icon from '@/app/icon.png';
import { Button } from './ui/button';
import {
	GithubIcon,
	HomeIcon,
	LockIcon,
	NewspaperIcon,
	RssIcon,
	TwitterIcon,
} from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { VisuallyHidden } from '@/app/components/visually-hidden';
import { VisuallyHidden as RadixVisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link, { LinkProps } from 'next/link';
import { siteConfig } from '@/app/config/site';
import React, { PropsWithChildren } from 'react';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/app/components/ui/dialog';
import { OptIn } from '@/app/components/posthog-provider';

const MotionLink = motion.create(Link);

const textMotion: Variants = {
	rest: {
		x: 0,
		fontWeight: '500',
		transition: {
			duration: 0.1,
			type: 'tween',
			ease: 'easeIn',
		},
	},
	hover: {
		fontWeight: '900',
		x: 5,
		transition: {
			duration: 0.2,
			type: 'tween',
			ease: 'easeOut',
		},
	},
};

function AnimatedLink({
	href,
	children,
	...props
}: { href: string } & PropsWithChildren & LinkProps) {
	return (
		<MotionLink
			className={'h-full w-full text-sm'}
			href={href}
			initial={'rest'}
			whileHover={'hover'}
			animate={'rest'}
			{...props}
		>
			<motion.div
				className={'flex items-center justify-start'}
				variants={textMotion}
			>
				{children}
			</motion.div>
		</MotionLink>
	);
}

export default function HeaderIconDropdown() {
	const [privacyDialogOpen, setPrivacyDialogOpen] = React.useState(false);
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size={'icon'} className={'cursor-pointer'}>
						<motion.div
							whileHover={{
								scale: [null, 1.25, 1.2],
								transition: {
									duration: 0.4,
									times: [0, 0.5, 1],
								},
							}}
						>
							<Image
								src={icon}
								alt={'Chibi icon of Marc'}
								width={32}
								height={32}
							/>
							<VisuallyHidden text={'Open Links Menu'} />
						</motion.div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" asChild>
					<nav>
						<div className={'md:hidden'}>
							<DropdownMenuItem>
								<AnimatedLink href={'/'}>
									<HomeIcon className="mr-2 h-4 w-4" />
									<span>Home</span>
								</AnimatedLink>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<AnimatedLink href={'/blog'}>
									<NewspaperIcon className="mr-2 h-4 w-4" />
									<span>Blog</span>
								</AnimatedLink>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
						</div>
						<DropdownMenuItem>
							<AnimatedLink href={siteConfig.creator.github}>
								<GithubIcon className="mr-2 h-4 w-4" />
								<span>GitHub</span>
							</AnimatedLink>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<AnimatedLink href={'/feed.xml'}>
								<RssIcon className="mr-2 h-4 w-4" />
								<span>RSS Feed</span>
							</AnimatedLink>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<AnimatedLink href={siteConfig.creator.twitter}>
								<TwitterIcon className="mr-2 h-4 w-4" />
								<span>Twitter</span>
							</AnimatedLink>
						</DropdownMenuItem>
						<Dialog
							open={privacyDialogOpen}
							onOpenChange={setPrivacyDialogOpen}
						>
							<DialogTrigger>
								<DropdownMenuItem onClick={() => setPrivacyDialogOpen(true)}>
									<AnimatedLink href={'#'}>
										<LockIcon className="mr-2 h-4 w-4" />
										<span>Privacy settings</span>
									</AnimatedLink>
								</DropdownMenuItem>
							</DialogTrigger>
							<DialogContent>
								<RadixVisuallyHidden>
									<DialogTitle>Privacy options</DialogTitle>
								</RadixVisuallyHidden>
								<OptIn
									className={'border-0 shadow-none'}
									forceShow
									onAction={() => setPrivacyDialogOpen(false)}
								/>
							</DialogContent>
						</Dialog>
					</nav>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
