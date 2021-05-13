module.exports = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/auth/:path*',
        destination: '/404',
        permanent: true,
      }
    ]
  },
}
