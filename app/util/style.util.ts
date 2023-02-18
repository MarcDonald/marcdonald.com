import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Helper function for creating conditional Tailwind classes
 * https://twitter.com/shadcn/status/1614692419039105024
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
