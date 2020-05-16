import React from "react";
import { Link } from "gatsby";

import Card from 'react-bootstrap/Card';

import tech from '../../images/technology.jpg';


export default () => {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    <h4>Technology</h4>
                    <p>Something about Technology</p>
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={tech} style={{margin: 0}}/>
        </Card>
    )
}