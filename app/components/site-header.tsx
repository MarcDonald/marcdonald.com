import Link from 'next/link';

import { siteConfig } from '@/app/config/site';
import { Button } from '@/app/components/ui/button';
import CommandMenu from './app-command-menu';
import { GithubIcon, RssIcon } from 'lucide-react';
import ThemePicker from './theme-picker';
import HeaderNav from '@/app/components/header-nav';
import HeaderIcon from '@/app/components/header-icon';
import { VisuallyHidden } from '@/app/components/visually-hidden';

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
							href={siteConfig.creator.github}
							rel={'me'}
							legacyBehavior
							passHref
						>
							<Button variant="ghost" size="icon" className={'flex sm:hidden'}>
								<GithubIcon />
								<VisuallyHidden text={'Go to GitHub Profile'} />
							</Button>
						</Link>
						<ThemePicker />
						<Link href={'/feed.xml'} legacyBehavior passHref>
							<Button variant="ghost" size="icon" className={'hidden sm:flex'}>
								<RssIcon />
								<VisuallyHidden text={'Open RSS Feed'} />
							</Button>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
