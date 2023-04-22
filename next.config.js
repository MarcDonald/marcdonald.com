/* eslint-disable @typescript-eslint/no-var-requires */
const { withAxiom } = require('next-axiom');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
	experimental: {
		appDir: true,
	},
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
	swcMinify: true,
});

module.exports = withContentlayer(nextConfig);
