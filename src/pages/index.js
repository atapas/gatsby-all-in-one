import React from "react";
import Layout from "../components/layout/Layout";

import CategoryList from '../components/categories/CategoryList';

export default ({ data }) => {
  return (
    <Layout>
      <CategoryList />
    </Layout>
  )
}