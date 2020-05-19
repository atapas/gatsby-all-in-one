import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default () => {
    const data = useStaticQuery(
        graphql`
      query {
        allMarkdownRemark(
            sort: {order: DESC, fields: frontmatter___date}, 
            filter: {frontmatter: {featured: {eq: true}}}) {
                edges {
                    node {
                        frontmatter {
                            featured
                            date
                            title
                            thumbnail
                            tags
                            cover
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
      }`
    );

    const featuredNode = data.allMarkdownRemark.edges[0].node;
    const excerpt = featuredNode.excerpt;
    const cover = featuredNode.frontmatter.cover;
    const tags = featuredNode.frontmatter.tags;
    const title = featuredNode.frontmatter.title;
    const slug = featuredNode.fields.slug;

    console.log(featuredNode);

    return (
        <div class="featured-article">
            <div class="featured-article__thumb">
                <div class="tag-categories">
                    <a href="#" class="tag">Lifestyle</a>
                    <a href="#" class="tag">India</a>
                </div>
                <img src={ cover } />
            </div>
            <h4 class="featured-article__title">
                <h5>{ title }</h5>
                <Link style={{ textDecoration: "none" }} to={ slug }> { excerpt } </Link>
            </h4>
        </div>
    )
};

