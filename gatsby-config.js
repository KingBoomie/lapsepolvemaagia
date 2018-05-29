module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pildid',
                path: 'src\\pages\\Sipsik\\pildid',
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-next',
        'gatsby-plugin-emotion',
        `gatsby-plugin-netlify`,
    ],
};
