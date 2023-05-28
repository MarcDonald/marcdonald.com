'use client';

import { TypographyH1, TypographyH2 } from '@/app/components/ui/typography';

export default function InternalServerError() {
	return (
		<div className={'grid h-full place-content-center text-center'}>
			<TypographyH1 className={'font-display mb-4 text-5xl'}>
				Oopsie
			</TypographyH1>
			<TypographyH2 className={'text-3xl'}>Something went wrong</TypographyH2>
		</div>
	);
}
