import React from "react";
import Layout from "../components/Layout";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/SEO";

const About = ({
  data: {
    contentfulBreweryContent: {
      aboutTitle,
      aboutText,
      aboutImage,
      featuredProductsTitle,
    },
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const textArr = aboutText.aboutText.split("\n\n");
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
          <GatsbyImage
            image={pathToImage}
            alt="About Us"
            className="about-img"
          />

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
    contentfulBreweryContent {
      aboutTitle
      aboutText {
        aboutText
      }
      aboutImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      featuredProductsTitle
    }
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
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
