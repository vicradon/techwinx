module.exports = {
  siteMetadata: {
    title: "Techwinx",
    description:"Bringing you the latest of tech from AI to VR to Tech in Africa",
    url:"https://techwinx.com"
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img-uploads`,
        name: 'uploads',
      },
    },
    
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