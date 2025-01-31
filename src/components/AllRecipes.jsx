import React, { useContext } from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const query = graphql`
  query {
    allContentfulBreweryProduct(sort: { title: ASC }) {
      nodes {
        id
        node_locale
        title
        featured
        cookTime
        prepTime
        tags

        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const globalState = useContext(GlobalStateContext);
  const data = useStaticQuery(query);
  const recipes = data.allContentfulBreweryProduct.nodes.filter(
    (recipe) => recipe.node_locale === globalState.lang
  );

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
