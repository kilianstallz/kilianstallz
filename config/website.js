const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kilian Stallinger | Web Developer', // Navigation and Site Title
  siteTitleAlt: 'Stallinger Web Developmetn', // Alternative Site title for SEO
  siteTitleShort: 'KST', // short_name for manifest
  siteHeadline: 'Creating mobile applications for the web.', // Headline for schema.org JSONLD
  siteUrl: 'https://kilianstallinger.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Kilian Stallinger developer portfolio. Building web apps and businesses.',
  author: 'KilianPeter', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kilianstallz', // Twitter Username
  ogSiteName: 'kilianstallz', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-129668287-1',

  // Manifest and Progress color
  themeColor: tailwind.colors['blue-dark'],
  backgroundColor: tailwind.colors.white,
}
