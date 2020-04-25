import React from "react";
import Layout from "../components/layout/Layout";
import PostList from '../components/posts/PostList';

const CategoryPost = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <div>
                <PostList data={data} />
            </div>
        </Layout>
    )
};

export default CategoryPost;

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail
            tags
            category
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