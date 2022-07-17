import type { LinksFunction } from '@remix-run/node';

import {
	LandingHeader,
	links as LandingHeaderLinks,
} from '~/components/Landing/Header';
import {
	ProjectNavigation,
	links as ProjectNavigationLinks,
} from '~/components/Landing/ProjectNavigation';
import {
	ProjectShowcase,
	links as ProjectShowcaseLinks,
} from '~/components/Landing/ProjectShowcase';
import {
	SocialAside,
	links as SocialAsideLinks,
} from '~/components/Landing/SocialAside';
import styles from '~/styles/index.css';

export const links: LinksFunction = () => {
	return [
		...LandingHeaderLinks(),
		...SocialAsideLinks(),
		...ProjectShowcaseLinks(),
		...ProjectNavigationLinks(),
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

// noinspection JSUnusedGlobalSymbols
export default function Index() {
	return (
		<div className={'grid'}>
			<LandingHeader />
			<SocialAside />
			<ProjectShowcase />
			<ProjectNavigation />
		</div>
	);
}
