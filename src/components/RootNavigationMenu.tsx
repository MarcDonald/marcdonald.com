'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import React, { type PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/Seperator';
import { TypographyH1, TypographyLarge } from '@/components/ui/Typography';
import { CodeIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import { SiMastodon } from '@icons-pack/react-simple-icons';

const ProjectListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ProjectListItem.displayName = 'ProjectListItem';

const List = ({
	children,
	className,
}: PropsWithChildren & { className?: string }) => {
	return (
		<ul className={cn('grid gap-3 p-6 md:w-[400px] lg:w-[500px]', className)}>
			{children}
		</ul>
	);
};

const ProjectsItem = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
			<NavigationMenuContent>
				<List>
					<TypographyLarge>For Fun</TypographyLarge>
					<ProjectListItem
						href="/twitch-spotify-bot"
						title="Twitch Spotify Bot"
					>
						Twitch chat bot that allows users to add songs to a Spotify queue
					</ProjectListItem>
					<ProjectListItem href="/hibi" title="Hibi">
						An Android app for learning Japanese by keeping a journal
					</ProjectListItem>
					<Separator />
					<TypographyLarge>University</TypographyLarge>
					<ProjectListItem
						href="/event-management-system"
						title="Event Management System"
					>
						System for the management of event security and stewarding personnel
					</ProjectListItem>
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const LinkListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					rel={'me'}
					className={cn(
						'flex select-none flex-row items-center gap-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
						className
					)}
					{...props}
				>
					{props.icon}
					<div>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
							{children}
						</p>
					</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
LinkListItem.displayName = 'LinkListItem';

const LinkNavigationSection = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger className={'mt-[3px]'}>
				<Image src={'/me_chibi.png'} alt={''} width={32} height={32} />
			</NavigationMenuTrigger>
			<NavigationMenuContent>
				<List>
					<TypographyLarge>Code</TypographyLarge>
					<LinkListItem
						href={'https://github.com/MarcDonald/marcdonald.com'}
						title="GitHub"
						icon={<GithubIcon size={32} />}
					>
						All my projects
					</LinkListItem>
					<Separator />
					<TypographyLarge>Rarely Used Socials</TypographyLarge>
					<LinkListItem
						href={'https://twitter.com/DeveloperMarc'}
						title="Twitter"
						icon={<TwitterIcon size={32} />}
					>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						I'm not really a tweeter
					</LinkListItem>
					<LinkListItem
						href={'https://techhub.social/MarcDonald'}
						title="Mastodon"
						icon={<SiMastodon size={32} />}
					>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						I'm not really a tooter either
					</LinkListItem>
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const RootNavigationMenu = () => {
	return (
		<NavigationMenu
			className={
				'sticky top-0 mb-2 grid list-none grid-cols-3 justify-between border-b border-b-slate-200 bg-white p-4 text-slate-900 dark:border-b-slate-700 dark:bg-slate-900 dark:text-slate-50 sm:grid'
			}
		>
			<NavigationMenuList className={'justify-start'}>
				<LinkNavigationSection />
				<ProjectsItem />
			</NavigationMenuList>
			<div className={'block sm:hidden'} />
			<TypographyH1 className={'hidden text-center sm:block'}>
				Marc Donald
			</TypographyH1>
			<NavigationMenuItem className={'flex justify-end'}>
				<Link href="/" legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>
						<CodeIcon />
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
		</NavigationMenu>
	);
};

export default RootNavigationMenu;
