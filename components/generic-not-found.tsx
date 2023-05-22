import { TypographyH1, TypographyH2 } from '@/components/ui/typography';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GenericNotFound() {
	return (
		<div className={'m-6 grid place-content-center gap-8 text-center'}>
			<div>
				<TypographyH1 className={'font-display mb-4 text-9xl'}>
					404
				</TypographyH1>
				<TypographyH2 className={'border-b-0 text-center'}>
					Not Found
				</TypographyH2>
			</div>
			<Link href={'/'} legacyBehavior passHref>
				<Button variant={'outline'}>Go Back Home</Button>
			</Link>
		</div>
	);
}
