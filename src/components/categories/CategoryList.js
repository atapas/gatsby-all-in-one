import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./CategoryList.module.scss";

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
  console.log(categoryList);

  return (
    <div className={styles.categoryList}>
      {
        categoryList && categoryList.map((category) => (

          <div className={styles.category}>
            <CategoryCard category={category} />
          </div>

        ))
      }
      </div>
  )
};

