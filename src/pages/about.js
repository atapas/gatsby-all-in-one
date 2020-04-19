import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)