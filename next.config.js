const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	images: {
		domains: ['placekitten.com'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	swcMinify: true,
});

module.exports = nextConfig;
