import React, { useContext } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import { RiMailSendLine } from "react-icons/ri";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const Contact = ({ data }) => {
  const globalState = useContext(GlobalStateContext);
  const { locales } = data.layout;

  console.log("locales", locales);
  const local = locales.filter(
    (local) => local.node.node_locale === globalState.lang
  );
  const { contactTitle, contactText, featuredProductsTitle } = local[0].node;

  const { nodes: recipes } = data.allContentfulRecipe;
  const textArr = contactText.contactText.split("\n\n");

  return (
    <>
      <Layout>
        <Seo title="Contact" description="" />
        <main className="page">
          <section className="contact-page">
            <article>
              {/* <h3>Want to get in Touch?</h3> */}
              <h3>{contactTitle}</h3>

              {textArr.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
              {/* <p>
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
            </p> */}
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
                  <RiMailSendLine size={25} /> {/* send */}
                </button>
              </form>
            </article>
          </section>
          <section className="featured-recipes">
            <h5>{featuredProductsTitle}</h5>
            <RecipesList recipes={recipes} />
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    layout: allContentfulBreweryContent {
      locales: edges {
        node {
          node_locale
          contactTitle
          contactText {
            contactText
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
