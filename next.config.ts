import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist', 
  images: {
    unoptimized: true,
  },
};
// const isProd = process.env.NODE_ENV === 'production';

// module.exports = { basePath: isProd ? '/' : '', assetPrefix: isProd ? '/' : '', images: { unoptimized: true,  }, };
// export default nextConfig;

module.exports = nextConfig;
