import React from "react";
import TagCapsules from '../tags/TagCapsules';
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../../utils/typography";

export default (props) => {
    return (
        <div>
            <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link
                        to={node.fields.slug}
                        css={css`
                text-decoration: none;
                color: inherit;
              `}
                    >
                        <h3
                            css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
                        >
                            {node.frontmatter.title}{" "}
                            <span
                                css={css`
                    color: #555;
                  `}
                            >
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </Link>
                    <TagCapsules tags={node.frontmatter.tags} />
                </div>
            ))}
        </div>
    )
}