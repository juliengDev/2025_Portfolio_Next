/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Si vous avez des images externes
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
}

export default nextConfig