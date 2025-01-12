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
  const local = locales.filter(
    (local) => local.node.node_locale === globalState.lang
  );
  const {
    contactTitle,
    contactText: { contactText },
    featuredProductsTitle,
  } = local[0].node;

  const { nodes: recipes } = data.allContentfulBreweryProduct;
  const textArr = contactText.split("\n\n");

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
                <button type="submit" className="btn-block">
                  <RiMailSendLine size={25} /> {/* send */}
                </button>
              </form>
            </article>
          </section>
          <section className="contact-info">
            <div class="location">
              <div class="map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d351231.1553743857!2d13.330208186202547!3d52.741960580018386!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b9d9f59a6faf%3A0xa7807b9ff7220481!2sAlte%20Dorfstra%C3%9Fe%203%2C%2016230%20Melchow!5e0!3m2!1sen!2sde!4v1736683226606!5m2!1sen!2sde"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="noReferrerWhenDowngrade"
                ></iframe>

                {/*  zoomed in map 
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.4487760450007!2d13.70365873110184!3d52.77510537024047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b9d9f59a6faf%3A0xa7807b9ff7220481!2sAlte%20Dorfstra%C3%9Fe%203%2C%2016230%20Melchow!5e0!3m2!1sen!2sde!4v1736678500826!5m2!1sen!2sde"
                  allowfullscreen=""
                  loading="lazy"
                  title="map"
                  referrerPolicy="noReferrerWhenDowngrade"
                  style={{
                    filter: "grayscale(0) contrast(1) invert(0%)",
                  }}
                ></iframe> */}
              </div>{" "}
              <div class="info">
                {globalState.lang === "en" && <h4>Our Address</h4>}
                {globalState.lang === "de" && <h4>Unsere Adresse</h4>}
                <p>Alte Dorfstraße 3,</p>
                <p>16230</p>
                <p>Melchow</p>
                <p>
                  <strong>Phone:</strong> (+49) 123 456 78
                </p>
                <p>
                  <strong>Email:</strong> todo@todo.com
                </p>
              </div>
            </div>
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
    allContentfulBreweryProduct(
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
