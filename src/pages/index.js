import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX dexigner & web developer based in Italy</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
          <p>{title} - {description} </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`
