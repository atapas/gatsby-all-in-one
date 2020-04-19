import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)