import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulBreweryProduct.nodes;
  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetProductByTag($tag: String) {
    allContentfulBreweryProduct(
      sort: { title: ASC }
      filter: { tags: { eq: $tag } }
    ) {
      nodes {
        title
        node_locale
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default TagTemplate;
