import { TypographyH1, TypographyH2 } from './components/ui/Typography';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className={'display m-4 grid h-full w-full place-content-center'}>
			<TypographyH1 className={'font-display mb-4 text-5xl'}>
				404 - Not Found
			</TypographyH1>
			<TypographyH2 className={'text-3xl'}>
				<Link href={'/'}>Click to Go Back Home</Link>
			</TypographyH2>
		</main>
	);
}
