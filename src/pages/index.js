import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
)