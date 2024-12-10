/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: ['sveltekit-version/', 'sveltekit-version/**']
   },
 
};

export default nextConfig;
