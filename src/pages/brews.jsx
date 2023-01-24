import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Brews = () => {
  return (
    <Layout>
      <SEO title="Brews" description="" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Brews;
