module.exports = {
  siteMetadata: {
    title: `Editing | Copywriting | Proofreading`,
    description: `Professional business page for all your editorial needs`,
    author: `@Wayne Mac Mavis`,
    menuLinks:[
      {
        name:'Home',
        link:'/',
      },
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Services',
        link:'/services'
      },
      {
        name:'Resources',
        link:'/resources'
      },
      {
        name:'Contact',
        link:'/contact'
      },
      {
        name:'Blog',
        link:'/blog'
      },
    ]
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `editing-proofreading-copywriting`,
        short_name: `editing`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
