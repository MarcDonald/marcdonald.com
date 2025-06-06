import React from 'react';
import { cn } from '@/app/lib/utils';
import Link from 'next/link';

type TypographyProps = React.PropsWithChildren & {
	className?: string;
	id?: string;
	tabIndex?: number;
};

export function TypographyH1({ className, ...props }: TypographyProps) {
	return (
		<h1
			className={cn(
				'font-display mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				className
			)}
			{...props}
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
				'font-display text-muted-foreground scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0',
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
				'font-display scroll-m-20 text-2xl font-bold tracking-tight',
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
				'font-display scroll-m-20 text-xl font-semibold tracking-tight',
				props.className
			)}
		>
			{props.children}
		</h4>
	);
}

export function TypographyP(props: TypographyProps) {
	return (
		<p {...props} className={cn('leading-7 not-first:mt-4', props.className)}>
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
				'bg-popover text-popover-foreground relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
				props.className
			)}
		>
			{props.children}
		</code>
	);
}

export function TypographyLead(props: TypographyProps) {
	return (
		<p {...props} className={cn('text-muted-foreground', props.className)}>
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
			className={cn('text-sm leading-none font-medium', props.className)}
		>
			{props.children}
		</small>
	);
}

export function TypographyMuted(props: TypographyProps) {
	return (
		<p
			{...props}
			className={cn('text-muted-foreground text-sm', props.className)}
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
				'border-foreground hover:border-primary hover:text-foreground focus:border-primary focus:text-foreground dark:border-foreground dark:hover:border-primary dark:focus:border-primary border-b transition-all duration-250 hover:rounded-b hover:border-b-4 focus:border-b-4',
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
