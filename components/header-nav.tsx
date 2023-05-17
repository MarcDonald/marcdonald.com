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
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, label }: { href: string; label: string }) => {
	const pathname = usePathname();

	return (
		<NavigationMenuItem>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink
					className={cn(
						navigationMenuTriggerStyle(),
						'bg-transparent',
						pathname === href ? 'bg-muted' : ''
					)}
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
	const pathname = usePathname();

	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						pathname === props.href ? 'bg-popover-foreground/10' : '',
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
	const pathName = usePathname();

	return (
		<NavigationMenu className={'ml-2 hidden justify-start md:flex'}>
			<NavigationMenuList>
				<NavItem href={'/'} label={'Home'} />
				<NavItem href={'https://github.com/MarcDonald'} label={'GitHub'} />
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className={cn(
							'data-[active]:bg-accent data-[state=open]:bg-accent',
							pathName.includes('project') ? 'bg-muted ' : ''
						)}
					>
						Projects
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/project/hibi" title="Hibi">
								Japanese learning journal app
							</ListItem>
							<ListItem href="https://buttercat.dev" title="Buttercat">
								Modular Twitch bot framework
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
