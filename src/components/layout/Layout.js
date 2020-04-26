import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../../utils/typography";

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
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div>
        <Link to={`/`}>
          <h2
            css={css`
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h2>
        </Link>
        <Link
          to={`/about/`}
          css={css`
          float: right;
        `}
        >
          About
      </Link>
        <h4>{data.site.siteMetadata.description}</h4>
      </div>

      {children}

      <footer
        css={css`
            padding: ${rhythm(0.5)};
            background-color: #ebebeb;
            border: 1px solid #ebebeb;
        `}
      >
        <Link to={`/`}>Home</Link> {' | '}
        <Link to={`/about/`} >About</Link> {' | '}
        <a href={`/admin/`} target='_blank' rel="noopener noreferrer"> admin </a>
      </footer>
    </div>
  )
}