/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pd.w.org', process.env.WP_ASSETS_URL],


  },
};

module.exports = nextConfig;
