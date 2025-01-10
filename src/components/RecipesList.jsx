import React, { useContext } from "react";
import { Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const RecipesList = ({ recipes = [] }) => {
  const globalState = useContext(GlobalStateContext);
  let ignored = 0;

  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        if (recipe === null) {
          console.log("recipes is NULL");

          return null;
        }
        const { id, node_locale, title, image, prepTime, cookTime } = recipe;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });

        if (node_locale !== globalState.lang) {
          console.log("recipe.ignored", recipe.node_locale);
          ignored++;
          if (ignored === recipes.length) {
            console.log("ignored all recipes!!");
            navigate("/tags");
          }
          return null;
        }
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              {globalState.lang === "de"
                ? `ABV: ${prepTime}% | Preis: ab ${cookTime}€/ltr`
                : `ABV: ${prepTime}% | Price: from ${cookTime}€/ltr`}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
