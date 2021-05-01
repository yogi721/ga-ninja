module.exports = {
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `notes`,
                path: `${__dirname}/src/notes/`,
            },
        }
    ],
    siteMetadata: {
        title: 'Web Mehdi',
        description: 'web dev portfolio',
        copyright: 'This website is copyright 2021 Web Mehdi'
    }
}