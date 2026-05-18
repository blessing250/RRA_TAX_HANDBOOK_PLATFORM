import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   output: 'standalone',

//   allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
// };

// For static export, we need to set the output to 'export' and unoptimize images since the default image optimization is not compatible with static export.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
