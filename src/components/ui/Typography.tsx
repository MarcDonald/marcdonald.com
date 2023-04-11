import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type TypographyProps = React.PropsWithChildren & {
	className?: string;
};

export function TypographyH1(props: TypographyProps) {
	return (
		<h1
			{...props}
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				props.className
			)}
		>
			{props.children}
		</h1>
	);
}

export function TypographyH2(props: TypographyProps) {
	return (
		<h2
			className={cn(
				'mt-5 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight text-slate-700 transition-colors first:mt-0 dark:border-b-slate-700 dark:text-slate-400 md:text-3xl',
				props.className
			)}
			{...props}
		>
			{props.children}
		</h2>
	);
}

export function TypographyH3(props: TypographyProps) {
	return (
		<h3
			{...props}
			className={cn(
				'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
				props.className
			)}
		>
			{props.children}
		</h3>
	);
}

export function TypographyH4(props: TypographyProps) {
	return (
		<h4
			{...props}
			className={cn(
				'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
				props.className
			)}
		>
			{props.children}
		</h4>
	);
}

export function TypographyP(props: TypographyProps) {
	return (
		<p
			{...props}
			className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}
		>
			{props.children}
		</p>
	);
}

export function TypographyBlockquote(props: TypographyProps) {
	return (
		<blockquote
			{...props}
			className={cn(
				'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200',
				props.className
			)}
		>
			{props.children}
		</blockquote>
	);
}

export function TypographyInlineCode(props: TypographyProps) {
	return (
		<code
			{...props}
			className={cn(
				'relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400',
				props.className
			)}
		>
			{props.children}
		</code>
	);
}

export function TypographyLead(props: TypographyProps) {
	return (
		<p
			{...props}
			className={cn(
				'text-xl text-slate-700 dark:text-slate-400',
				props.className
			)}
		>
			{props.children}
		</p>
	);
}

export function TypographyLarge(props: TypographyProps) {
	return (
		<div
			{...props}
			className={cn(
				'text-lg font-semibold text-slate-900 dark:text-slate-50',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}

export function TypographySmall(props: TypographyProps) {
	return (
		<small
			{...props}
			className={cn('text-sm font-medium leading-none', props.className)}
		>
			{props.children}
		</small>
	);
}

export function TypographySubtle(props: TypographyProps) {
	return (
		<p
			{...props}
			className={cn(
				'text-sm text-slate-500 dark:text-slate-400',
				props.className
			)}
		>
			{props.children}
		</p>
	);
}

export const TypographyLink = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & { href: string }
>(({ children, className, href, ...props }, ref) => {
	return (
		<Link
			className={cn(
				'duration-250 border-b border-slate-900 transition-all hover:border-b-4 hover:text-slate-900 dark:border-slate-300 hover:dark:text-slate-300',
				className
			)}
			href={href}
			{...props}
			ref={ref}
		>
			{children}
		</Link>
	);
});
TypographyLink.displayName = 'TypographyLink';
