module.exports = {
  siteMetadata: {
    title: `Maple Leafs Drought`,
    description: `What does the timeline of the Leafs look like if 1 day were equal to 1 pixel`,
    author: `Andrew Tham`,
    keywords: `maple leafs, leafs, hockey, toronto, nhl, playoffs, leaf, ice hockey, fans, stanley cup, playoffs, hockey team, mlse`,
    url: 'http://maplelafsdrought.com',
    image: `src/images/seo.png`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maple Leafs Drought`,
        short_name: 'Maple Leafs Drought',
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#00488e`,
        display: `standalone`,
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
}
