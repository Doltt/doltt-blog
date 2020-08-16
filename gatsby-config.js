/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `我是胡杨树`,
		author: `胡杨树`,
		description: `胡杨树的个人博客/站点`,
		keywords: `gatsby, 胡杨树, 博客, 金融, 互联网`
	},
	plugins: [
		// Read markdown files via GraphQL
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`, //file path
				name: 'posts',
			},
		},
		// Markdown to HTML
		{
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [
	        {
	          resolve: `gatsby-remark-highlight-code`,
	          options:{
	          	terminal: 'carbon',
	          	theme: 'blackboard',
	          },
	        },
	      ],
    	},
  	},
		// Support PWA
		`gatsby-plugin-offline`,
		// SEO
		`gatsby-plugin-react-helmet`,
	],


}