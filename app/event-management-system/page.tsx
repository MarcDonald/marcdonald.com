import PageContentWrapper from '../components/PageContentWrapper';
import {
	TypographyH1,
	TypographyH2,
	TypographyP,
} from '../components/ui/Typography';
import DownloadSection from '../components/DownloadSection';

export default function EmsPage() {
	return (
		<PageContentWrapper>
			<TypographyH1>Event Management System</TypographyH1>
			<TypographyH2>
				Final Year Project for my BEng Software Engineering degree.
			</TypographyH2>
			<DownloadSection
				githubSlug={'marcdonald/event-management-system'}
				className={'-mb-2'}
			/>
			<TypographyP>
				A system for the management of Security and Stewarding staff at events.
			</TypographyP>
		</PageContentWrapper>
	);
}
