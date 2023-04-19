'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './ui/NavigationMenu';
import React, { type PropsWithChildren } from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Separator } from './ui/Seperator';
import { TypographyLarge } from './ui/Typography';
import { CodeIcon, GithubIcon, HomeIcon, TwitterIcon } from 'lucide-react';
import { SiMastodon } from '@icons-pack/react-simple-icons';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/Tooltip';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { useRouter } from 'next/router';

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-600 dark:focus:bg-slate-600',
						className
					)}
					{...props}
				>
					{children}
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';

const ProjectListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ title, children, ...props }, ref) => {
	return (
		<ListItem {...props} ref={ref}>
			<div className="text-sm font-medium leading-none">{title}</div>
			<p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
				{children}
			</p>
		</ListItem>
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
					<ProjectListItem href="https://buttercat.dev" title="Buttercat">
						A framework for creating modular, extensible, and easy to set up
						Twitch bots
					</ProjectListItem>
					<ProjectListItem href="/hibi" title="Page">
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
>(({ title, children, ...props }, ref) => {
	return (
		<ListItem {...props} ref={ref}>
			<div className={'flex flex-row items-center gap-4'}>
				{props.icon}
				<div>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
						{children}
					</p>
				</div>
			</div>
		</ListItem>
	);
});
LinkListItem.displayName = 'LinkListItem';

const LinkNavigationSection = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger className={'mt-[2px]'}>
				<Avatar className={'m-1 h-8 w-8'}>
					<AvatarImage src={'/me_chibi.png'} />
					<AvatarFallback>MD</AvatarFallback>
				</Avatar>
			</NavigationMenuTrigger>
			<NavigationMenuContent>
				<List>
					<TypographyLarge>Where to Find Me</TypographyLarge>
					<LinkListItem
						href={'https://github.com/MarcDonald/marcdonald.com'}
						title="GitHub"
						icon={<GithubIcon size={32} />}
					>
						All my projects
					</LinkListItem>
					<LinkListItem
						href={'https://twitter.com/DeveloperMarc'}
						title="Twitter"
						icon={<TwitterIcon size={32} />}
					>
						I'm not really a tweeter
					</LinkListItem>
					<LinkListItem
						href={'https://techhub.social/@MarcDonald'}
						title="Mastodon"
						icon={<SiMastodon size={32} />}
					>
						I'm not really a tooter either
					</LinkListItem>
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const RootNavigationMenu = () => {
	const { route } = useRouter();
	return (
		<NavigationMenu
			className={
				'sticky top-0 mb-2 flex list-none justify-between border-b border-b-slate-200 bg-white p-4 text-slate-900 dark:border-b-slate-700 dark:bg-slate-800 dark:text-slate-50'
			}
		>
			<NavigationMenuList>
				<LinkNavigationSection />
				<ProjectsItem />
			</NavigationMenuList>
			{route === '/' ? (
				<Tooltip>
					<NavigationMenuItem>
						<Link
							href="https://github.com/marcdonald/marcdonald.com"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<TooltipTrigger>
									<CodeIcon />
								</TooltipTrigger>
								<TooltipContent>Source code for this site</TooltipContent>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</Tooltip>
			) : (
				<Tooltip>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<TooltipTrigger>
									<HomeIcon />
								</TooltipTrigger>
								<TooltipContent>Home</TooltipContent>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</Tooltip>
			)}
		</NavigationMenu>
	);
};

export default RootNavigationMenu;
