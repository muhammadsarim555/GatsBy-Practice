import React from "react"

import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function index() {
  return (
    <Layout>
      <div className={styles?.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & I have created Web</h3>
      </div>
    </Layout>
  )
}