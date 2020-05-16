import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';


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



        <footer
          css={css`
            margin-top: ${rhythm(2)};
        `}
        >
          <Link to={`/`}>Home</Link> {' | '}
          <Link to={`/about/`} >About</Link> {' | '}
          <a href={`/admin/`} target='_blank' rel="noopener noreferrer"> admin </a>
        </footer>
      </Container>
    </>
  )
}