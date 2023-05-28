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

export default function ThemePicker() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
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
						<SunIcon className="absolute -left-[12px] -top-[12px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<MoonIcon className="absolute -left-[12px] -top-[12px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					</motion.div>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					<SunIcon className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					<MoonIcon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					<LaptopIcon className="mr-2 h-4 w-4" />
					<span>System</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
