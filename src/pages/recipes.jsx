import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" description="" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
