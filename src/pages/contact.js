import React from "react"
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)