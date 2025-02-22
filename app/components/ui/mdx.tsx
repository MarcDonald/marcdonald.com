import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/app/lib/utils';
import '@/app/styles/mdx.css';
import { TypographyLink } from '@/app/components/ui/typography';
import DownloadSection from '@/app/(routes)/project/[slug]/_components/download-section';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { AnchorButton } from '@/app/components/anchor-button';
import Balancer from 'react-wrap-balancer';

const ResponsiveImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line jsx-a11y/alt-text
	<Image
		sizes="100vw"
		style={{ width: '100%', height: 'auto' }}
		className={cn(props.className)}
		{...props}
	/>
);

type ComponentProps = {
	className?: string;
	id?: string;
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
				'group mt-10 flex scroll-m-20 flex-row border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
				className
			)}
			{...props}
		>
			<Balancer>{props.children}</Balancer>
			<AnchorButton linkTo={props.id} className={'self-center'} />
		</h2>
	),
	h3: ({ className, ...props }: ComponentProps) => (
		<h3
			className={cn(
				'group mt-8 flex scroll-m-20 text-2xl font-semibold tracking-tight',
				className
			)}
			{...props}
		>
			<Balancer>{props.children}</Balancer>
			<AnchorButton linkTo={props.id} className={'self-center'} />
		</h3>
	),
	h4: ({ className, ...props }: ComponentProps) => (
		<h4
			className={cn(
				'mt-8 flex scroll-m-20 text-xl font-semibold tracking-tight',
				className
			)}
			{...props}
		>
			<Balancer>{props.children}</Balancer>
			<AnchorButton linkTo={props.id} className={'self-center'} />
		</h4>
	),
	h5: ({ className, ...props }: ComponentProps) => (
		<h5
			className={cn(
				'mt-8 flex scroll-m-20 text-lg font-semibold tracking-tight',
				className
			)}
			{...props}
		>
			<Balancer>{props.children}</Balancer>
			<AnchorButton linkTo={props.id} className={'self-center'} />
		</h5>
	),
	h6: ({ className, ...props }: ComponentProps) => (
		<h6
			className={cn(
				'mt-8 flex scroll-m-20 text-base font-semibold tracking-tight',
				className
			)}
			{...props}
		>
			<Balancer>{props.children}</Balancer>
			<AnchorButton linkTo={props.id} className={'self-center'} />
		</h6>
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
			className={cn('leading-7 [&:not(:first-child)]:mt-4', className)}
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
	figcaption: ({ className, ...props }: ComponentProps) => (
		<figcaption className={cn('italic', className)} {...props} />
	),
	img: ResponsiveImage,
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
				'mb-4 mt-6 overflow-x-auto break-words bg-slate-900 py-4',
				className
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }: ComponentProps) => (
		<code
			className={cn(
				'break-words bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
				className
			)}
			{...props}
		/>
	),
	Image,
	DownloadSection,
	Alert,
	AlertDescription,
	AlertTitle,
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
