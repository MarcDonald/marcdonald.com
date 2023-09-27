import {
	BookmarkIcon,
	CatIcon,
	GitPullRequestIcon,
	LucideIcon,
	ShieldCheckIcon,
} from 'lucide-react';

export type ProjectDetails = {
	title: string;
	description: string;
	link: string;
	icon: LucideIcon;
};

export const projects: ProjectDetails[] = [
	{
		title: 'Omniscience',
		description:
			'Mac app to help you manage GitHub Pull Requests and optimise your code review process',
		link: 'https://omniscience.app',
		icon: GitPullRequestIcon,
	},
	{
		title: 'Hibi',
		description:
			'An Android app designed to aid your Japanese learning through keeping a journal',
		link: '/project/hibi',
		icon: BookmarkIcon,
	},
	{
		title: 'Buttercat (WIP)',
		description:
			'A (WIP) framework for creating modular, extensible, and easy to set up Twitch bots',
		link: 'https://buttercat.dev',
		icon: CatIcon,
	},
	{
		title: 'Event Management System',
		description:
			'System for the management of event security and stewarding personnel (Final year university project)',
		link: '/project/event-management-system',
		icon: ShieldCheckIcon,
	},
];
