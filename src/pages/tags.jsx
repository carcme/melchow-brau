import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const Tags = ({ data }) => {
  const nodes = data.allContentfulRecipe.nodes;
  const globalState = useContext(GlobalStateContext);
  const recipes = nodes.filter(
    (recipes) => recipes.node_locale === globalState.lang
  );
  const newTags = setupTags(recipes);

  return (
    <Layout>
      <Seo title="Tags" description="" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text).toLocaleLowerCase();
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        node_locale
        tags
      }
    }
  }
`;

export default Tags;
