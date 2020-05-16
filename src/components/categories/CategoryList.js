import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategoryCard from './CategoryCard';


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category___name) {
            fieldValue
            totalCount
            nodes {
              frontmatter {
                category {
                  desc
                  image
                }
              }
            }
          }
        }
      }`
  );

  const categoryList = data.allMarkdownRemark.group;
  console.log(categoryList[0]);
  return (
    <Container>
      <Row>
        <Col>
          <CategoryCard category = {categoryList[3]}/>
        </Col>
        <Col>
          <CategoryCard category = {categoryList[2]}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CategoryCard category = {categoryList[1]}/>
        </Col>
        <Col>
          <CategoryCard category = {categoryList[0]}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CategoryCard category = {categoryList[4]}/>
        </Col>
        <Col>
          Sixth
        </Col>
        <Col>
          Eighth
        </Col>
        <Col>
          Eight
        </Col>
      </Row>
    </Container>


  )
};

