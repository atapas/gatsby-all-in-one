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
                <Card>
                    <Card.Body className={styles.headerBody}>
                        <Card.Text>
                            <h4 className={styles.header}>{category.fieldValue}</h4>
                            <span className={styles.subHeader}>{category.totalCount} Post(s)</span>
                        </Card.Text>
                    </Card.Body>
                    {
                        
                        <Card.Img 
                            variant="bottom" 
                            src={categoryImage} 
                            style={{margin: 0, height: '200px', width: '270px'}}/>
                           
                    }
                    
                </Card> 
            </Link>: null
        }
        </>
    )
}