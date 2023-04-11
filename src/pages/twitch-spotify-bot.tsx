import {
	TypographyH1,
	TypographyH2,
	TypographyP,
} from '@/components/ui/Typography';
import PageContentWrapper from '@/components/PageContentWrapper';
import { TextTooltip } from '@/components/ui/Tooltip';
import Image from 'next/image';
import DownloadSection from '@/components/DownloadSection';

export default function TwitchSpotifyBot() {
	return (
		<PageContentWrapper>
			<TypographyH1>Twitch Spotify Bot</TypographyH1>
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
				githubSlug={'marcdonald/twitch-spotify-request-bot'}
				className={'-mb-2 '}
			/>
			<TypographyP>
				A bot that lets your Twitch chat add songs to your Spotify queue so you
				can vibe with your viewers.
			</TypographyP>
		</PageContentWrapper>
	);
}
