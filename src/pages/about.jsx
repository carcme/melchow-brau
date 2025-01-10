import React, { useContext } from "react";
import Layout from "../components/Layout";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const About = ({ data }) => {
  const globalState = useContext(GlobalStateContext);
  const { nodes: recipes } = data.allContentfulRecipe;
  const { locales } = data.layout;
  const local = locales.filter(
    (local) => local.node.node_locale === globalState.lang
  );
  const {
    aboutTitle,
    aboutText: { aboutText },
    aboutImage,
    featuredProductsTitle,
  } = local[0].node;
  const textArr = aboutText.split("\n\n");
  const pathToImage = getImage(aboutImage);

  return (
    <Layout>
      <Seo title="About" description="About page for Melchow Brau" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>{aboutTitle}</h2>

            {textArr.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}

            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <article className="align-items-center">
            <GatsbyImage
              image={pathToImage}
              alt="About Us"
              className="about-img"
            />
          </article>

          {/* <StaticImage
            src="../assets/images/about.jpg"
            alt="Beers on a counter top"
            className="about-img"
            placeholder="blurred"
          /> */}
        </section>
        <section className="featured-recipes">
          <h5>{featuredProductsTitle}</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    layout: allContentfulBreweryContent {
      locales: edges {
        node {
          node_locale
          aboutTitle
          aboutText {
            aboutText
          }
          aboutImage {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
          featuredProductsTitle
        }
      }
    }

    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        node_locale
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default About;
