module.exports = {
  async redirects() {
    return [
      {
        source: '/auth/:path*',
        destination: '/404',
        permanent: true,
      }
    ]
  },
};
