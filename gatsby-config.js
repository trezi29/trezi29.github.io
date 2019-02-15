module.exports = {
  siteMetadata: {
    title: 'cartasu.ga',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cartasu.ga',
        short_name: 'cartasu.ga',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'fullscreen',
        icon: 'src/icon/cartasuga_icon.png', // This path is relative to the root of the site. TODO
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
