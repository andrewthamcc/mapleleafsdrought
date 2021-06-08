module.exports = {
  siteMetadata: {
    title: `Maple Leafs Drought`,
    description: `The timeline of the Toronto Maple Leafs since their last Stanley Cup if one day were equal to 1 pixel`,
    author: `Andrew Tham`,
    keywords: `maple leafs, leafs, leafs drought, maple leafs drought, stanley cup, hockey, toronto, nhl, playoffs, leaf, ice hockey, fans, playoffs, hockey team, mlse`,
    url: 'http://mapleleafsdrought.com',
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
