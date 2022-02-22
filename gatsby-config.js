module.exports = {
  siteMetadata: {
    title: `podcast-access-landing-page`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
