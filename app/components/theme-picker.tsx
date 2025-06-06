'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/app/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { VisuallyHidden } from '@/app/components/visually-hidden';
import { dropdownTextMotion } from './animated-link';
import { cn } from '@/app/lib/utils';

const AnimatedDropdownMenuItem = ({
	setTheme,
	selected,
	children,
}: {
	setTheme: () => void;
	selected?: boolean;
	children: React.ReactNode;
}) => (
	<DropdownMenuItem onClick={setTheme}>
		<motion.button
			className={cn(
				'flex w-full cursor-pointer items-center justify-start',
				selected && 'font-bold'
			)}
			initial={'rest'}
			whileHover={'hover'}
			animate={'rest'}
			variants={dropdownTextMotion}
		>
			{children}
		</motion.button>
	</DropdownMenuItem>
);

export default function ThemePicker() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size={'icon'} className={'cursor-pointer'}>
					<motion.div
						className={'absolute'}
						whileHover={{
							rotate: [0, 20, -20, 0],
							scale: 1.1,
							transition: {
								duration: 0.5,
								times: [0, 0.5, 1],
							},
						}}
					>
						<SunIcon className="absolute -top-[12px] -left-[12px] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
						<MoonIcon className="absolute -top-[12px] -left-[12px] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					</motion.div>
					<VisuallyHidden text={'Open theme switcher'} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<AnimatedDropdownMenuItem
					setTheme={() => setTheme('light')}
					selected={theme === 'light'}
				>
					<SunIcon className="mr-2 h-4 w-4" />
					<span>Light</span>
				</AnimatedDropdownMenuItem>
				<AnimatedDropdownMenuItem
					setTheme={() => setTheme('dark')}
					selected={theme === 'dark'}
				>
					<MoonIcon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</AnimatedDropdownMenuItem>
				<AnimatedDropdownMenuItem
					setTheme={() => setTheme('system')}
					selected={theme === 'system'}
				>
					<LaptopIcon className="mr-2 h-4 w-4" />
					<span>System</span>
				</AnimatedDropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
