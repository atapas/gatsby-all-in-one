import React from 'react';
import _ from "lodash";
import { Link } from "gatsby";

import styles from "./TagCapsules.module.scss";

const Tag = props => {
    const tag = props.tag;

    return (
        <li>
            <Link
                className={styles.tag}
                to={`/tags/${_.kebabCase(tag)}`}
            >
                {tag}
            </Link>
        </li>
    )
};

const Tagcapsules = props => {
    const tags = props.tags;
    console.log(tags);
    return (
        <ul className={styles.tags}>
            {
                tags && tags.map((tag) => (
                    
                        <Tag tag={tag} key={tag} />
                    
                ))
            }

        </ul>
    )
};

export default Tagcapsules;