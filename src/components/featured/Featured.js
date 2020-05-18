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
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {excerpt}
                </Card.Text>
                <Link to={slug}>
                    <Button variant="primary">Read the Full Story!</Button>
                </Link>
            </Card.Body>
        </Card>
    )
};

