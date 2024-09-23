'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardDescription, CardFooter, CardTitle } from './ui/card';
import { CardHeader } from '@/app/components/ui/card';

if (typeof window !== 'undefined') {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		person_profiles: 'identified_only',
		opt_out_capturing_by_default: true,
	});
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export function OptIn({
	className,
	forceShow,
	onAction,
}: {
	className?: string;
	forceShow?: boolean;
	onAction?: () => void;
}) {
	const [show, setShow] = useState(forceShow || false);

	useEffect(() => {
		setShow(
			forceShow ||
				(localStorage.getItem('has_seen_opt_in') !== 'true' &&
					posthog.has_opted_out_capturing())
		);
	}, [forceShow]);

	return show ? (
		<Card
			className={className ? className : 'fixed bottom-0 right-0 m-6 w-[350px]'}
		>
			<CardHeader>
				<CardTitle>Anonymous Analytics</CardTitle>
				<CardDescription>
					I use anonymous tracking to see what people are interested in and see
					where I can improve the site. If you're cool with that then click
					accept!
				</CardDescription>
			</CardHeader>
			<CardFooter className="flex justify-between">
				<Button
					variant="ghost"
					onClick={() => {
						posthog.opt_out_capturing();
						localStorage.setItem('has_seen_opt_in', 'true');
						setShow(false);
						onAction?.();
					}}
				>
					No thanks
				</Button>
				<Button
					onClick={() => {
						posthog.opt_in_capturing();
						localStorage.setItem('has_seen_opt_in', 'true');
						setShow(false);
						onAction?.();
					}}
				>
					Accept
				</Button>
			</CardFooter>
		</Card>
	) : (
		<></>
	);
}
