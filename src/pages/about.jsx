import React from "react";
import Layout from "../components/Layout";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/SEO";

const About = ({
  data: {
    contentfulBreweryAbout: {
      title: aboutTitle,
      content,
      image: aboutImage,
      contactTitle,
      contactContent,
    },
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const aboutText = content.content.split("\n\n");
  const pathToImage = getImage(aboutImage);

  return (
    <Layout>
      <Seo title="About" description="About page for Melchow Brau" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>{aboutTitle}</h2>

            {aboutText.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}

            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <GatsbyImage
            image={pathToImage}
            alt="Our brewery"
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
          <h5>Our Featured Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulBreweryAbout {
      title
      content {
        content
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
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
