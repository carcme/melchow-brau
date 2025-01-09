import React, { useContext } from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const Home = ({ data }) => {
  const globalState = useContext(GlobalStateContext);

  const { en, de } = data;

  let lang;

  switch (globalState.lang) {
    case "de":
      lang = de.edges[0].node;
      break;
    default:
      lang = en.edges[0].node;
      break;
  }

  const { heroHeading, heroSubHeading, heroImage } = lang;
  const pathToImage = getImage(heroImage);

  return (
    <>
      <Layout>
        <Seo title="Home" description="Homepage for Melchow Brau" />
        <main className="page">
          <header className="hero">
            <GatsbyImage
              image={pathToImage}
              alt="hero image"
              className="hero-img"
              layout="fullWidth"
            />
            {/* <StaticImage
            src="../assets/images/melchow-brau-main.jpg"
            alt="hero image"
            className="hero-img"
            placeholder="DOMINANT_COLOR"
            layout="fullWidth"
          /> */}
            <div className="hero-container">
              <div className="hero-text">
                <h1>{heroHeading}</h1>
                <h4>{heroSubHeading}</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    de: allContentfulBreweryContent(filter: { node_locale: { eq: "de" } }) {
      edges {
        node {
          heroHeading
          heroSubHeading
          heroImage {
            gatsbyImageData
          }
        }
      }
    }
    en: allContentfulBreweryContent(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          heroHeading
          heroSubHeading
          heroImage {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default Home;
