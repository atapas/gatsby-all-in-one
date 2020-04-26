import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import PostList from '../components/posts/PostList';

export default ({ data }) => {
  return (
    <Layout>
      <PostList data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            cover
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`