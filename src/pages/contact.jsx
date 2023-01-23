import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact" description="" />
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want to get in Touch?</h3>

            <p>
              A pissed mating ritual is wasted. Sometimes a Hoptoberfest
              hibernates, but the greasy porter always dances with the colt 45
              near the bud light!
            </p>
            <p>
              A fashionable Strohs earns enough for a beer, and the booze
              self-flagellates; however, a Home brew operates a small bar with
              the blood clot.
            </p>
            <p>
              A Home brew over a Christmas Ale throws a bottle of beer at a Lone
              Star defined by a power drill drink, and the fried Miller writes a
              love letter to the Bacardi Silver.
            </p>
            <p>
              The bill of a monkey bite, a bottle of beer for a Heineken, and
              the sake bomb are what made America great! When you see a burly
              Stella Artois, it means that a keg related to the shot hides
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xeqwowza"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact;
