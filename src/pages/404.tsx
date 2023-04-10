import { TypographyH1, TypographyH2 } from '@/components/ui/Typography';

export default function InternalServerError() {
	return (
		<div className={'grid h-full place-content-center text-center'}>
			<TypographyH1 className={'font-display mb-4 text-5xl'}>404</TypographyH1>
			<TypographyH2 className={'text-3xl'}>Not Found</TypographyH2>
		</div>
	);
}
