import { GithubIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { TypographyLarge } from '@/components/ui/Typography';

export default function Header() {
	return (
		<header className={'sticky top-0 flex bg-accent p-2'}>
			<Link href={'/'} className={'rounded-md p-2'}>
				<HomeIcon />
			</Link>
			<div className={'flex flex-1 items-center justify-center'}>
				<TypographyLarge className={'text-2xl'}>Marc Donald</TypographyLarge>
			</div>
			<Link href={'https://github.com/MarcDonald'} className={'rounded-md p-2'}>
				<GithubIcon />
			</Link>
		</header>
	);
}
