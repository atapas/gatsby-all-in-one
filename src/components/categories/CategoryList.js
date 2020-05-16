import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import _ from "lodash";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategoryCard from './CategoryCard';


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }`
  );

  const categoryList = data.allMarkdownRemark.group;
  console.log(categoryList);
  return (
    <Container>
      <Row>
        <Col>
          <CategoryCard />
        </Col>
        <Col>
          Second
        </Col>
      </Row>
      <Row>
        <Col>
          Third
        </Col>
        <Col>
          Fourth
        </Col>
      </Row>
      <Row>
        <Col>
          Fifth
        </Col>
        <Col>
          Sixth
        </Col>
        <Col>
          <>
            {
              categoryList && categoryList.map((category) => (
                <Link
                  key={category.fieldValue}
                  style={{ textDecoration: "none" }}
                  to={`/categories/${_.kebabCase(category.fieldValue)}`}>
                  <button type="button">{category.fieldValue}</button>
                </Link>
              ))
            }

          </>
        </Col>
        <Col>
          Eight
        </Col>
      </Row>
    </Container>


  )
};

