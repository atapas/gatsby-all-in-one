import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";

import CategoryList from '../components/categories/CategoryList';

export default ({ data }) => {
  return (
    <Layout>
      <CategoryList />
    </Layout>
  )
}