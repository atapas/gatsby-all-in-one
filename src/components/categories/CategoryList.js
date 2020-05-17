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
  console.log(categoryList[0]);
  return (
    <div className={styles.categoryList}>
      <div className={styles.category}>
        <CategoryCard category = {categoryList[3]}/>
      </div>
      <div className={styles.category}>  
        <CategoryCard category = {categoryList[2]}/>
      </div>
      <div className={styles.category}>
        <CategoryCard category = {categoryList[1]}/>
      </div>
      <div className={styles.category}>  
        <CategoryCard category = {categoryList[0]}/> 
      </div>
      <div className={styles.category}>
        <CategoryCard category = {categoryList[4]}/>
      </div>
      <div className={styles.category}>  
        Sixth
      </div>
      <div className={styles.category}>  
        Seventh
      </div>
      <div className={styles.category}>  
        Eight
      </div>
    </div>


  )
};

