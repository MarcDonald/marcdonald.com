import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
	TypographyP,
	TypographySubtle,
} from '@/components/ui/Typography';
import PageContentWrapper from '@/components/PageContentWrapper';

export default function Home() {
	return (
		<PageContentWrapper>
			<TypographyH1>
				Senior Software Engineer from Northern Ireland
			</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<TypographyH3>Here's some things I made</TypographyH3>
			<ul className={'m-5 list-disc'}>
				<li>
					<TypographyP>
						<TypographyLink href={'/hibi'}>Hibi</TypographyLink>
					</TypographyP>
					<TypographySubtle>
						An Android app for learning Japanese by keeping a journal
					</TypographySubtle>
				</li>
				<li className={'mt-5'}>
					<TypographyP>
						<TypographyLink href={'/twitch-spotify-bot'}>
							Twitch Spotify Bot
						</TypographyLink>
					</TypographyP>
					<TypographySubtle>
						Twitch chat bot that allows users to add songs to a Spotify queue
					</TypographySubtle>
				</li>
				<li className={'mt-5'}>
					<TypographyP>
						<TypographyLink href={'/event-management-system'}>
							Event Management System
						</TypographyLink>
					</TypographyP>
					<TypographySubtle>
						System for the management of event security and stewarding personnel
					</TypographySubtle>
				</li>
			</ul>
		</PageContentWrapper>
	);
}
