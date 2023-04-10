import {
	TypographyH1,
	TypographyLead,
	TypographyLink,
} from '@/components/ui/Typography';
import WipBanner from '@/components/WipBanner';

export default function WIP(props: { pageName: string; link: string }) {
	return (
		<main className={'mx-4'}>
			<WipBanner />
			<TypographyH1 className={'font-display mb-4 text-5xl'}>
				{props.pageName}
			</TypographyH1>
			<TypographyLead>
				This page is currently still under construction. In the meantime, you
				can check out the repository{' '}
				<TypographyLink href={props.link}>here</TypographyLink> or go back to
				the home page by clicking{' '}
				<TypographyLink href={'/'}>here</TypographyLink>.
			</TypographyLead>
		</main>
	);
}
