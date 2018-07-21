module.exports = {
    siteMetadata: {
        title: `Spacebar | Jishaal Kalyan - Frontend Developer from Auckland`,
    },
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		},
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			}
		},
		{
			resolve: `gatsby-source-medium`,
			options: {
				username: `@jishaal`
			}
		},
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
	]
};
