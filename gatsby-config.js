module.exports = {
	siteMetadata: {
		title: `Spacebar | Jishaal Kalyan - Frontend Developer from Auckland`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		},
		{
			resolve: `gatsby-plugin-emotion`
		},
		{
			resolve: `gatsby-source-medium`,
			options: {
				username: `@jishaal`
			}
		},
		{
			resolve: `gatsby-plugin-react-helmet`
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Spacebar',
                short_name: 'Spacebar',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#333EB7',
				display: 'browser',
				icon: 'assets/favicon.png' // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-42097851-2'
			}
		}
	]
};
