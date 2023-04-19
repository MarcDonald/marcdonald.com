import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TypographyLarge } from '@/components/ui/Typography';
import icon from '@/icon.png';

export default function Header() {
	return (
		<header className={'sticky top-0 flex bg-accent p-2'}>
			<Link href={'/'} className={'rounded-md p-2'}>
				<Image src={icon} alt={''} width={32} height={32} />
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
