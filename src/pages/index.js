import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles?.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles?.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: "60%"}}/>
      </section>
    </Layout>
  )
}
