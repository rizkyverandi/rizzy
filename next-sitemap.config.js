/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || "https://example.com",
  generateRobotsTxt: true, // (optional)
  exclude: ['/blog', '/blog/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // additionalSitemaps: [
    //   "https://example.com/server-sitemap.xml",
    // ],
    // (optional)
    // additionalPaths: async (slugs) => {
    //   return slugs.map((slug) => ({
    //     loc: `/stories/${slug}`,
    //     lastmod: new Date().toISOString(),
    //   }));
    // }
    // ...other options
  },
};
