import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
};
module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
