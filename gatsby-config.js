module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `Example site to learn gatsby in and out`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}