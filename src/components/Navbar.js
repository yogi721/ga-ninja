import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

function Navbar() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{title}</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
