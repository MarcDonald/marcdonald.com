import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';
import '@/styles/mdx.css';
import { TypographyLink } from '@/components/ui/typography';
import DownloadSection from '@/app/(routes)/project/[slug]/_components/download-section';

type ComponentProps = {
	className?: string;
} & React.PropsWithChildren;

const components = {
	h1: ({ className, ...props }: ComponentProps) => (
		<h1
			className={cn(
				'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: ComponentProps) => (
		<h2
			className={cn(
				'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
				className
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: ComponentProps) => (
		<h3
			className={cn(
				'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: ComponentProps) => (
		<h4
			className={cn(
				'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: ComponentProps) => (
		<h5
			className={cn(
				'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: ComponentProps) => (
		<h6
			className={cn(
				'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	a: ({
		className,
		href,
		...props
	}: ComponentProps & { href?: string | undefined }) => (
		<TypographyLink href={href ?? ''} className={cn(className)} {...props} />
	),
	p: ({ className, ...props }: ComponentProps) => (
		<p
			className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: ComponentProps) => (
		<ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
	),
	ol: ({ className, ...props }: ComponentProps) => (
		<ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
	),
	li: ({ className, ...props }: ComponentProps) => (
		<li className={cn('mt-2', className)} {...props} />
	),
	blockquote: ({ className, ...props }: ComponentProps) => (
		<blockquote
			className={cn(
				'mt-6 break-words border-l-2 pl-6 italic text-muted [&>*]:text-foreground',
				className
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img className={cn('rounded-md border', className)} alt={alt} {...props} />
	),
	hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table className={cn('w-full', className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={cn('m-0 border-t p-0 even:bg-muted', className)}
			{...props}
		/>
	),
	th: ({ className, ...props }: ComponentProps) => (
		<th
			className={cn(
				'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
				className
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: ComponentProps) => (
		<td
			className={cn(
				'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
				className
			)}
			{...props}
		/>
	),
	pre: ({ className, ...props }: ComponentProps) => (
		<pre
			className={cn(
				'mb-4 mt-6 overflow-x-auto break-words rounded-lg bg-slate-900 py-4',
				className
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }: ComponentProps) => (
		<code
			className={cn(
				'break-words rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
				className
			)}
			{...props}
		/>
	),
	Image,
	DownloadSection,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
