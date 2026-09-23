/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //https://images.unsplash.com/photo-1788371642972-cd2eda4805ac
  //https://i.ibb.co.com/7xsq7FLw/55.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: ''
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: ''
      }
    ]
  }
}

export default nextConfig
