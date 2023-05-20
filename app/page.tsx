import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyLink,
	TypographyP,
	TypographyMuted,
} from '@/components/ui/typography';

export default function Home() {
	return (
		<>
			<TypographyH1>Marc Donald</TypographyH1>
			<TypographyH2>
				I like to make things with TypeScript and React
			</TypographyH2>
			<TypographyH3 className={'mt-4'}>
				Here's some things I've made
			</TypographyH3>
			<ul className={'m-5 list-disc'}>
				<li>
					<TypographyP>
						<TypographyLink href={'/project/hibi'}>Hibi</TypographyLink>
					</TypographyP>
					<TypographyMuted>
						An Android app designed to aid your Japanese learning through
						keeping a journal
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
						(Final year university project)
					</TypographyMuted>
				</li>
			</ul>
		</>
	);
}
