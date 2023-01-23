import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="About page for Melchow Brau" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>A molten Brewers Reserve</h2>
            <p>
              A miller near a Homebrew reads a magazine, but an Alaskan IPA
              carelessly ignores a PBR. A colt 45 laughs and drinks all night
              with a moldy bar stool.
            </p>
            <p>
              A Rolling Rock related to a Stella Artois avoids contact with the
              nuclear Budweiser dry living with a Corona.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Beers on a counter top"
            className="about-img"
            placeholder="blurred"
          />
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
