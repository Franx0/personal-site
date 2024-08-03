/** @type { import("next").NextConfig } */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:path",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/comments",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/auth/:path*",
        destination: "/404",
        permanent: true,
      }
    ]
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
