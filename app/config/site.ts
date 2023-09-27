const isProduction = () => {
	const vercelEnv = process.env.VERCEL_ENV;
	if (vercelEnv) {
		// Server Side
		return vercelEnv === 'production';
	} else {
		// Client Side
		const origin =
			typeof window !== 'undefined' && window.location?.origin
				? window.location.origin
				: '';
		return origin === 'https://marcdonald.com';
	}
};
export const siteConfig = {
	name: isProduction() ? 'Marc Donald' : 'Marc Donald 🚧',
	url: isProduction()
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
	isProduction: isProduction(),
};

export type SiteConfig = typeof siteConfig;
