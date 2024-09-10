/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  redirects: async () => [
    {
      source: "/",         // When user navigates to root
      destination: "/home", // Redirect them to /home
      permanent: true,     // Set the redirect as permanent (HTTP 308)
    },
  ],
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  ...nextConfig,  // Merge MDX configuration with other Next.js config
});
