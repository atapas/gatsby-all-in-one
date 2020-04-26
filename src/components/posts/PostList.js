import React from "react";
import TagCapsules from '../tags/TagCapsules';
import { Link } from "gatsby";
import { css } from "@emotion/core";

import styles from './PostList.module.scss';

const Post = props => (
    <div className={styles.post}>
        <img src={props.cover} className={styles.cover} alt="" />
        <div className={styles.description}>
            <h3 className={styles.postname}>
                {props.postname} {' '}
                <span
                    css={css`
                            color: #555;
                        `}
                >
                    — {props.postdate}
                </span>
            </h3>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default (props) => {
    return (
        <div>
            <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
                <>
                    <Link
                        key={node.id}
                        to={node.fields.slug}
                        css={css`
                            text-decoration: none;
                            color: inherit;
                        `}
                    >
                        <Post
                            key={node.id}
                            linkto={node.fields.slug}
                            postname={node.frontmatter.title}
                            postdate={node.frontmatter.date}
                            cover={node.frontmatter.cover}
                            excerpt={node.excerpt}
                        />
                    </Link>
                    <TagCapsules tags={node.frontmatter.tags} />
                </>
            ))}
        </div>
    )
}