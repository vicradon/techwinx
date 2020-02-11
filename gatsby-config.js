module.exports = {
  plugins: [
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img-uploads`,
        name: 'uploads',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 825,
            },
          },
        ]
      }
    },
    
  ],
}