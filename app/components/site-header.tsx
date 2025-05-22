import CommandMenu from './app-command-menu';
import ThemePicker from './theme-picker';
import HeaderNav from '@/app/components/header-nav';
import HeaderIconDropdown from '@/app/components/header-icon-dropdown';

export function SiteHeader() {
	return (
		<header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-40 w-full border-b shadow-xs backdrop-blur-sm">
			<div className="container flex h-14 items-center space-x-2 px-4">
				<HeaderIconDropdown />
				<HeaderNav />
				<div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<CommandMenu />
					</div>
					<nav className="flex items-center space-x-1">
						<ThemePicker />
					</nav>
				</div>
			</div>
		</header>
	);
}
