module.exports = {
  siteMetadata: {
    title: `A portfolio website for Adam Hopkins`,
    siteUrl: 'https://adamhopkins.dev',
    description: 'A portfolio site for all things Adam Hopkins'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    }
  ]
}
