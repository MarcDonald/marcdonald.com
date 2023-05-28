/* eslint-disable @typescript-eslint/no-var-requires */
const { withAxiom } = require('next-axiom');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
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
	swcMinify: true,
});

module.exports = withContentlayer(nextConfig);
