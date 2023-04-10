import { TypographyH1, TypographyH2 } from '@/components/ui/Typography';

export default function Home() {
	return (
		<main className={'my-4'}>
			<TypographyH1 className={'text-center sm:hidden'}>
				Marc Donald
			</TypographyH1>
			<TypographyH2 className={'text-center'}>
				Senior Software Engineer
			</TypographyH2>
		</main>
	);
}
