import {
	TypographyH1,
	TypographyH2,
	TypographyP,
} from '../components/ui/Typography';
import PageContentWrapper from '../components/PageContentWrapper';
import { TextTooltip } from '../components/ui/Tooltip';
import Image from 'next/image';
import DownloadSection from '../components/DownloadSection';

export default function ButtercatPage() {
	return (
		<PageContentWrapper>
			<TypographyH1>Buttercat</TypographyH1>
			<TypographyH2>
				<TextTooltip
					text={'PepeJAM'}
					content={
						<Image
							src={'/PepeJAM.webp'}
							alt={'PepeJAM Twitch Emote'}
							width={64}
							height={64}
						/>
					}
				/>{' '}
				with your Twitch chat
			</TypographyH2>
			<DownloadSection
				githubSlug={'marcdonald/buttercat'}
				className={'-mb-2 '}
			/>
			<TypographyP>
				A framework for creating modular, extensible, and easy to set up Twitch
				bots
			</TypographyP>
		</PageContentWrapper>
	);
}
