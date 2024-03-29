module.exports = {
  siteMetadata: {
    title: `Milk Experiment`,
    description: `Milk Experiment: science fiction thoughts blasted into the void`,
    author: `@sailorv`,
    siteUrl: `https://www.sailorven.us`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: [
            "./src/styles/_variables.scss",
            ".src/styles/styles.scss",
          ],
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://live-milk-experiment.pantheonsite.io/graphql`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://live-milk-experiment.pantheonsite.io/graphql`,
        schema: {
          perPage: 20,
        },
        html: {
          imageMaxWidth: 2000,
          fallbackImageMaxWidth: 2000,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`VT323`, `Share Tech Mono`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-X37VDV5JQ8"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
  ],
}
