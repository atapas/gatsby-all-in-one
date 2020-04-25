import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import _ from "lodash";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }`
  );

  const categoryList = data.allMarkdownRemark.group;
  console.log(categoryList);
  return (
    <div>
      
      {
        categoryList && categoryList.map((category) => (
          <Link 
            key={category.fieldValue}
            style={{ textDecoration: "none" }} 
            to={`/categories/${_.kebabCase(category.fieldValue)}`}>
              <button type="button">{category.fieldValue}</button>
          </Link>
        ))
      }
    </div>
  )
};

