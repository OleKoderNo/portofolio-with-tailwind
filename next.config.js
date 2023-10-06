/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		// formats: ['image/avif', 'image/webp','image/png'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**/*',
			},
		],
	},
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
