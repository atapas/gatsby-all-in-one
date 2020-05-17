import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import Card from 'react-bootstrap/Card';

import styles from "./CategoryCard.module.scss";

import tech from '../../images/technology.jpg';


export default (props) => {
    let category = props.category;
    if (category) {
        console.log(category);
    }
    
    return (
        <>
        { category ?
            <Link
                style={{ textDecoration: "none" }}
                to={`/categories/${_.kebabCase(category.fieldValue)}`}>
                <Card>
                    <Card.Body className={styles.headerBody}>
                        <Card.Text>
                            <h4 className={styles.header}>{category.fieldValue}</h4>
                            <span className={styles.subHeader}>{category.totalCount} Post(s)</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img 
                        variant="bottom" 
                        src={require("../../images/" + category.nodes[0].frontmatter.category.image)} 
                        style={{margin: 0, height: '200px'}}/>
                </Card> 
            </Link>: null
        }
        </>
    )
}