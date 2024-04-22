import {
	BookmarkIcon,
	GitPullRequestIcon,
	ImportIcon,
	LucideIcon,
	PaletteIcon,
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
		title: 'Badger',
		description:
			'An app for iOS that lets you test your badges and emotes without uploading them to Twitch',
		link: '/project/badger',
		icon: PaletteIcon,
	},
	{
		title: 'Obsidian Day One Importer',
		description: 'Obsidian plugin that lets you import Day One journals',
		link: '/project/obsidian-day-one-importer',
		icon: ImportIcon,
	},
	{
		title: 'Hibi',
		description:
			'An Android app designed to aid your Japanese learning through keeping a journal',
		link: '/project/hibi',
		icon: BookmarkIcon,
	},
	{
		title: 'Event Management System',
		description:
			'System for the management of event security and stewarding personnel (Final year university project)',
		link: '/project/event-management-system',
		icon: ShieldCheckIcon,
	},
];
