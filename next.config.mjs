import {withAxiom} from 'next-axiom';

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
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

export default nextConfig;
