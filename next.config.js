module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/me',
        permanent: true,
      },
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
