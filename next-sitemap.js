module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/auth/:path*', '/posts', '/404', '/500'],
}
