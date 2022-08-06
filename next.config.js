/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');


module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  reactStrictMode: true,
  swcMinify: true
});




// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  // images: {
  //   domains: [
  //     'api.lorem.space',
  //     'placeimg.com'
  // ]
  // }
  // env: {
  //   customKey: 'customValue'
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     }
  //   ]
  // }
// }

// module.exports = nextConfig
