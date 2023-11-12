'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/app/components/ui/navigation-menu';
import { cn } from '@/app/lib/utils';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({
	href,
	label,
	parentLink,
}: {
	href: string;
	label: string;
	parentLink?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = parentLink ? pathname.startsWith(href) : pathname === href;

	return (
		<NavigationMenuItem>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink
					className={cn(
						navigationMenuTriggerStyle(),
						'bg-transparent',
						isActive ? 'bg-muted' : ''
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
					<div className="text-sm font-semibold leading-none">{title}</div>
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
				<NavItem href={'/blog'} label={'Blog'} parentLink={true} />
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
							<ListItem href="https://omniscience.app" title="Omniscience">
								GitHub Pull Request management app
							</ListItem>
							<ListItem href="/project/hibi" title="Hibi">
								Japanese learning journal app
							</ListItem>
							<ListItem href="https://buttercat.dev" title="Buttercat">
								WIP Modular Twitch bot framework
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
