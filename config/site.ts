const isProduction = process.env.VERCEL_ENV === 'production';
export const siteConfig = {
	name: isProduction ? 'Marc Donald' : 'Marc Donald 🚧',
	url: isProduction
		? 'https://marcdonald.com'
		: 'https://development.marcdonald.com',
	description: 'I like to make things with TypeScript and React',
	links: {
		github: 'https://github.com/marcdonald/marcdonald.com',
	},
	creator: {
		name: 'Marc Donald',
		twitter: 'https://twitter.com/@DeveloperMarc',
		github: 'https://github.com/MarcDonald',
	},
	showBlog: !isProduction,
	isProduction,
};

export type SiteConfig = typeof siteConfig;
