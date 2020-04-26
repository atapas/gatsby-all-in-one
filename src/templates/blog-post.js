import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        { post.frontmatter.cover && <img src={post.frontmatter.cover} alt="cover" /> }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover
      }
    }
  }
`