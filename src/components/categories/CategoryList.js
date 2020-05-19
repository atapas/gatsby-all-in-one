import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import CategoryCard from './CategoryCard';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category___name) {
            fieldValue
            totalCount
            nodes {
              frontmatter {
                category {
                  desc
                  image
                }
              }
            }
          }
        }
      }`
  );

  const categoryList = data.allMarkdownRemark.group;
  categoryList.sort((a, b) => b.totalCount - a.totalCount);
  categoryList.length = 6;

  console.log(categoryList);
  
  return (
   
     <div className="home-featured-categories">
      {
        categoryList && categoryList.map((category, index) => (
          
          <div className={`category-item level--${index+1}`} key={index}>
            <CategoryCard category = { category } />
          </div>
        ))
      }
      </div>
  )
};

