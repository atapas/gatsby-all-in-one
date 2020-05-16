import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';

import Footer from './Footer';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">

          {data.site.siteMetadata.title}
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to={`/about/`}>
              About
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>


      </Navbar>

      <Container fluid>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}