import React, { useContext } from "react";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const TagsList = ({ recipes }) => {
  const globalState = useContext(GlobalStateContext);

  // fliter recipes by language
  recipes = recipes.filter((recipe) => recipe.node_locale === globalState.lang);
  const newTags = setupTags(recipes);

  return (
    <div className="tags-container">
      <h4>Tags</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
