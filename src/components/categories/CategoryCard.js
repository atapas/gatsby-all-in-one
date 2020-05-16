import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import Card from 'react-bootstrap/Card';

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
                    <Card.Body>
                        <Card.Text>
                            <h4>{category.fieldValue}</h4>
                            <span>{category.totalCount} Posts</span>
                            <p>{category.nodes[0].frontmatter.category.desc}</p>
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