import Link from 'next/link';

import { siteConfig } from '@/app/config/site';
import { cn } from '@/app/lib/utils';
import { buttonVariants } from '@/app/components/ui/button';
import CommandMenu from './app-command-menu';
import { GithubIcon, RssIcon } from 'lucide-react';
import ThemePicker from './theme-picker';
import HeaderNav from '@/app/components/header-nav';
import HeaderIcon from '@/app/components/header-icon';

export function SiteHeader() {
	return (
		<header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
			<div className="container flex h-14 items-center px-4">
				<HeaderIcon />
				<HeaderNav />
				<div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<CommandMenu />
					</div>
					<nav className="flex items-center space-x-1">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
							className={'sm:block md:hidden'}
						>
							<div
								className={cn(
									buttonVariants({
										size: 'sm',
										variant: 'ghost',
									}),
									'w-9 px-0'
								)}
							>
								<GithubIcon className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<ThemePicker />
						<Link
							href={'/feed.xml'}
							target="_blank"
							rel="noreferrer"
							className={'hidden sm:block'}
						>
							<div
								className={cn(
									buttonVariants({
										size: 'sm',
										variant: 'ghost',
									}),
									'w-9 px-0'
								)}
							>
								<RssIcon className="h-5 w-5" />
								<span className="sr-only">RSS Feed</span>
							</div>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
