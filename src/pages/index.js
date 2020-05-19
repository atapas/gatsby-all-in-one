import React from "react";
import Layout from "../components/layout/Layout";

import CategoryList from '../components/categories/CategoryList';
import Feature from '../components/featured/Featured';

export default ({ data }) => {


  return (
    <Layout>
      <div className="section-hero">
        <div className="hero-main">
          <h2 className="page-title--home">
            <span>We have got a lot to talk about
          </span>
            <strong>What are you looking up-to?</strong>
          </h2>
          <CategoryList />
        </div>
        <div class="hero-sidebar">
          <Feature /> 
        </div>  
   
    </div>
    
    </Layout>
  )
}