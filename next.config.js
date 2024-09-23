/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	reactStrictMode: true,
	images: {
		domains: ['placekitten.com', 'githubusercontent.com'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	async redirects() {
		return [
			{
				source: '/hibi',
				destination: '/project/hibi',
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/ingest/static/:path*',
				destination: 'https://eu-assets.i.posthog.com/static/:path*',
			},
			{
				source: '/ingest/:path*',
				destination: 'https://eu.i.posthog.com/:path*',
			},
			{
				source: '/ingest/decide',
				destination: 'https://eu.i.posthog.com/decide',
			},
		];
	},
	// This is required to support PostHog trailing slash API requests
	skipTrailingSlashRedirect: true,

	swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
