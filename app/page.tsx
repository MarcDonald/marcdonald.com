import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
	TypographyP,
	TypographyMuted,
} from '../components/ui/typography';
import PageContentWrapper from '../components/page-content-wrapper';

export default function Home() {
	return (
		<PageContentWrapper>
			<TypographyH1>
				Senior Software Engineer from Northern Ireland
			</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<TypographyH3 className={'mt-4'}>Here's some things I made</TypographyH3>
			<ul className={'m-5 list-disc'}>
				<li>
					<TypographyP>
						<TypographyLink href={'/project/hibi'}>Hibi</TypographyLink>
					</TypographyP>
					<TypographyMuted>
						An Android app for learning Japanese by keeping a journal
					</TypographyMuted>
				</li>
				<li className={'mt-5'}>
					<TypographyP>
						<TypographyLink href={'https://buttercat.dev'}>
							Buttercat
						</TypographyLink>
					</TypographyP>
					<TypographyMuted>
						A framework for creating modular, extensible, and easy to set up
						Twitch bots
					</TypographyMuted>
				</li>
				<li className={'mt-5'}>
					<TypographyP>
						<TypographyLink href={'/project/event-management-system'}>
							Event Management System
						</TypographyLink>
					</TypographyP>
					<TypographyMuted>
						System for the management of event security and stewarding personnel
					</TypographyMuted>
				</li>
			</ul>
		</PageContentWrapper>
	);
}
