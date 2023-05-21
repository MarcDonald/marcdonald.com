const isProduction = process.env.VERCEL_ENV === 'production';
export const siteConfig = {
	name: isProduction ? 'Marc Donald' : 'Marc Donald 🚧',
	url: isProduction
		? 'https://marcdonald.com'
		: 'https://development.marcdonald.com',
	description: 'Senior Software Engineer',
	links: {
		github: 'https://github.com/marcdonald/marcdonald.com',
	},
	creator: {
		name: 'Marc Donald',
		twitter: 'https://twitter.com/@DeveloperMarc',
		github: 'https://github.com/MarcDonald',
	},
	isProduction,
};

export type SiteConfig = typeof siteConfig;
