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
				'mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
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
			{...props}
			className={cn(
				'scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-muted-foreground transition-colors first:mt-0',
				props.className
			)}
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
				'scroll-m-20 text-2xl font-semibold tracking-tight',
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
				'scroll-m-20 text-xl font-semibold tracking-tight',
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
			className={cn('mt-6 border-l-2 pl-6 italic', props.className)}
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
				'relative rounded bg-popover px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-popover-foreground',
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
			className={cn('text-xl text-muted-foreground', props.className)}
		>
			{props.children}
		</p>
	);
}

export function TypographyLarge(props: TypographyProps) {
	return (
		<div {...props} className={cn('text-lg font-semibold', props.className)}>
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

export function TypographyMuted(props: TypographyProps) {
	return (
		<p
			{...props}
			className={cn('text-sm text-muted-foreground', props.className)}
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
				'duration-250 hover:dark:foreground border-b border-foreground transition-all hover:border-b-4 hover:text-foreground dark:border-foreground',
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
