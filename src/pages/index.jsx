import * as React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/SEO";

const Home = ({ data }) => {
  const { heroHeading, heroSubHeading, heroImage } =
    data.contentfulBreweryContent;

  const pathToImage = getImage(heroImage);

  return (
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
            placeholder="tracedSVG"
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
  );
};

export const query = graphql`
  query {
    contentfulBreweryContent {
      heroHeading
      heroSubHeading
      heroImage {
        gatsbyImageData
      }
    }
  }
`;
export default Home;
