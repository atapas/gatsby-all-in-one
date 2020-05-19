import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import Card from 'react-bootstrap/Card';

import styles from "./CategoryCard.module.scss";

export default (props) => {
    let category = props.category;
    let fromAsset = false;
   
    console.log(category);
    let categoryImage = category.nodes[0].frontmatter.category.image;

    if (categoryImage && categoryImage.indexOf('/assets/') === -1) {
        categoryImage = '/assets/' + categoryImage;
    }
    return (
        <>
        { category ?
            <Link
                style={{ textDecoration: "none" }}
                to={`/categories/${_.kebabCase(category.fieldValue)}`}>
                <h3 className="category-item__title">{ category.fieldValue }</h3>
            </Link>: null
        }
        </>
    )
}