import React from 'react';
import _ from "lodash";
import { Link } from "gatsby";

const Tag = props => {
    const tag = props.tag;

    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
        >
            <button type="button">{tag}</button>
        </Link>
    )
};

const Tagcapsules = props => {
    const tags = props.tags;
    console.log(tags);
    return (
        <>
            {
                tags && tags.map((tag) => (
                    <span key={tag}>
                        <Tag tag={tag} /> {' '}
                    </span>
                ))
            }

        </>
    )
};

export default Tagcapsules;