'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { DialogProps } from '@radix-ui/react-alert-dialog';
import {
	BookmarkIcon,
	CatIcon,
	GithubIcon,
	HomeIcon,
	Laptop,
	Moon,
	ShieldCheckIcon,
	SunMedium,
	TwitterIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from './ui/command';
import { siteConfig } from '@/config/site';

export default function AppCommandMenu({
	...props
}: DialogProps & { className?: string }) {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const { setTheme } = useTheme();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className={cn(
					'relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'
				)}
				onClick={() => setOpen(true)}
				{...props}
			>
				<span className="inline-flex">Search...</span>
				<kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Projects">
						<CommandItem
							onSelect={() => runCommand(() => router.push('/project/hibi'))}
						>
							<BookmarkIcon className="mr-2 h-4 w-4" />
							Hibi
						</CommandItem>
						<CommandItem
							onSelect={() =>
								runCommand(() =>
									router.push('/project/event-management-system')
								)
							}
						>
							<ShieldCheckIcon className="mr-2 h-4 w-4" />
							Event Management System
						</CommandItem>
						<CommandItem
							onSelect={() =>
								runCommand(() => router.push('https://buttercat.dev'))
							}
						>
							<CatIcon className="mr-2 h-4 w-4" />
							Buttercat
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Theme">
						<CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
							<SunMedium className="mr-2 h-4 w-4" />
							Light
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
							<Moon className="mr-2 h-4 w-4" />
							Dark
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
							<Laptop className="mr-2 h-4 w-4" />
							System
						</CommandItem>
					</CommandGroup>
					<CommandGroup heading="Links">
						<CommandItem onSelect={() => runCommand(() => router.push('/'))}>
							<HomeIcon className="mr-2 h-4 w-4" />
							Home
						</CommandItem>
						<CommandItem
							onSelect={() =>
								runCommand(() => router.push(siteConfig.creator.github))
							}
						>
							<GithubIcon className="mr-2 h-4 w-4" />
							GitHub
						</CommandItem>
						<CommandItem
							onSelect={() =>
								runCommand(() => router.push(siteConfig.creator.twitter))
							}
						>
							<TwitterIcon className="mr-2 h-4 w-4" />
							Twitter
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
