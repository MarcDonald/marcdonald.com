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
import { GithubIcon, TwitterIcon } from 'lucide-react';
import { SiMastodon } from '@icons-pack/react-simple-icons';

const ListItem = React.forwardRef<
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
ListItem.displayName = 'ListItem';

const List = ({ children }: PropsWithChildren) => {
	return (
		<ul className="mx-4 grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
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
					<ListItem href="/twitch-spotify-bot" title="Twitch Spotify Bot">
						Twitch chat bot that allows users to add songs to a Spotify queue
					</ListItem>
					<ListItem href="/hibi" title="Hibi">
						An Android app for learning Japanese by keeping a journal
					</ListItem>
					<Separator />
					<TypographyLarge>University</TypographyLarge>
					<ListItem
						href="/event-management-system"
						title="Event Management System"
					>
						System for the management of event security and stewarding personnel
					</ListItem>
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const RootNavigationMenu = () => {
	return (
		<NavigationMenu
			className={
				'sticky top-0 mb-2 flex justify-start justify-between border-b border-b-slate-200 bg-white p-4 text-slate-900 dark:border-b-slate-700 dark:bg-slate-900 dark:text-slate-50'
			}
		>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<Image src={'/icon.png'} width={32} height={32} alt={''} />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<ProjectsItem />
			</NavigationMenuList>
			<TypographyH1 className={'hidden sm:block'}>Marc Donald</TypographyH1>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link
						href="https://github.com/MarcDonald/marcdonald.com"
						legacyBehavior
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<GithubIcon />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href="https://twitter.com/DeveloperMarc"
						legacyBehavior
						passHref
						rel={'me'}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<TwitterIcon />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href="https://techhub.social/MarcDonakd"
						legacyBehavior
						passHref
						rel={'me'}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							<SiMastodon />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default RootNavigationMenu;
