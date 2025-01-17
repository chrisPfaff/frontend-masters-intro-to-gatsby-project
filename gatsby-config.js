module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.gatsby.com',
    title: 'Intro to gatsby',
    description: 'Intro description',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AUZ4QVD-mj_nIOZ5QjFRuwHaF-%26pid%3DApi&f=1',
  },
  plugins: [
    //PLUGIN FOR HEAD META TAGS
    'gatsby-plugin-react-helmet',
    //END PLUGIN FOR HEAD META TAGS

    //THESE CONFIGS ARE FOR MDX MARKDOWN /POSTS AND ALLOWING THEM TO BE VIEWED AS PAGES
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/postlayout.js'),
        },
      },
    },
    //END MDX CONFIG FOR POSTS
    //Image compression
    'gatsby-remark-images',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //end image compression
  ],
};
