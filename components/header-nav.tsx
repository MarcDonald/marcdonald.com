'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

const NavItem = ({ href, label }: { href: string; label: string }) => {
	return (
		<NavigationMenuItem>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink
					className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
				>
					{label}
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

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
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';

export default function HeaderNav() {
	return (
		<NavigationMenu className={'ml-2 hidden justify-start md:flex'}>
			<NavigationMenuList>
				<NavItem href={'/'} label={'Home'} />
				<NavItem href={'https://github.com/MarcDonald'} label={'GitHub'} />
				<NavigationMenuItem>
					<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/project/hibi" title="Hibi">
								Aid your Japanese learning through keeping a journal
							</ListItem>
							<ListItem href="https://buttercat.dev" title="Buttercat">
								A framework for creating modular Twitch bots
							</ListItem>
							<ListItem
								href="/project/event-management-system"
								title="Event Management System"
							>
								Final year project for my degree
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
