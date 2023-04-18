import PageContentWrapper from '../components/PageContentWrapper';
import {
	TypographyH1,
	TypographyH2,
	TypographyH3,
} from '../components/ui/Typography';
import DownloadSection from '../components/DownloadSection';

export default function HibiPage() {
	return (
		<PageContentWrapper>
			<TypographyH1>Hibi 「日々」</TypographyH1>
			<TypographyH2>
				Learn Japanese by writing about your everyday life
			</TypographyH2>
			<DownloadSection githubSlug={'marcdonald/hibi'} />
			<TypographyH3 className={'my-4'}>Features</TypographyH3>
			<ul className={'list-inside list-disc'}>
				<li>Add entries at any date and time</li>
				<li>
					Search for words through Jisho.org right from the editing screen
					without having to switch app
				</li>
				<li>Save new words used in an entry</li>
				<li>Tag entries (e.g. Holiday, Day Out, Birthday)</li>
				<li>
					Add entries to books (e.g. Trip to Tokyo 2018, Trip to Shirakawa-go
					2019)
				</li>
				<li>Add locations to entries</li>
				<li>Add images to entries</li>
				<li>
					Search your entries based on date, content, location, tags or books
				</li>
				<li>Daily reminder to add an entry</li>
				<li>Ability to backup and restore your data</li>
				<li>
					Easily see entries made on this day last month, and in previous years,
					using the Throwback feature
				</li>{' '}
			</ul>
		</PageContentWrapper>
	);
}
