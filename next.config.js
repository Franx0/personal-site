const pkg = require('./package.json');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    config.externals = config.externals || []
      .concat(Object.keys(pkg.peerDependencies))
      .concat(Object.keys(pkg.dependencies));

    return config
  },
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
