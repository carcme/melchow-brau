import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPercent } from "react-icons/bs";
import { SiHomebrew } from "react-icons/si";
import Layout from "../components/Layout";
import slugify from "slugify";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const BreweryProductTemplate = ({ data }) => {
  const globalState = useContext(GlobalStateContext);
  const nodes = data.allContentfulBreweryProduct.nodes;

  const locale = nodes.filter((node) => node.node_locale === globalState.lang);
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    tags,
    description: { description },
    image,
  } = locale[0];

  const pathToImage = getImage(image);
  const { instructions, ingredients, tools } = content;

  return (
    <>
      <Layout>
        <Seo title={title} description={description} />
        <main className="page">
          <div className="recipe-page">
            {/* hero */}
            <section className="recipe-hero">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              />
              <article className="recipe-info">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* icons */}
                <div className="recipe-icons">
                  <article>
                    <BsPercent />
                    <h5>ABV</h5>
                    <p>{prepTime} %</p>
                  </article>
                  <article>
                    <SiHomebrew />
                    <h5>serving</h5>
                    <p>{servings} </p>
                  </article>
                  <article>
                    <BsClockHistory />
                    <h5>cook time</h5>
                    <p>{cookTime} min.</p>
                  </article>
                  <article>
                    <BsClock />
                    <h5>prep time</h5>
                    <p>{prepTime} mins.</p>
                  </article>
                </div>
                {/* tags */}
                <p className="recipe-tags">
                  Tags :
                  {tags.map((tag, index) => {
                    const slug = slugify(tag, { lower: true });

                    return (
                      <Link to={`/tags/${slug}`} key={index}>
                        {tag}
                      </Link>
                    );
                  })}
                </p>
              </article>
            </section>
            {/* rest of the content */}
            <section className="recipe-content">
              <article>
                <h4>instructions</h4>
                {instructions.map((item, index) => {
                  return (
                    <div key={index} className="single-instruction">
                      <header>
                        <p>step {index + 1}</p>
                        <div></div>
                      </header>
                      <p>{item}</p>
                    </div>
                  );
                })}
              </article>
              <article className="second-column">
                <div>
                  <h4>ingredients</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingredient">
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <h4>tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </article>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($title: String) {
    allContentfulBreweryProduct(filter: { title: { eq: $title } }) {
      nodes {
        title
        node_locale
        cookTime
        tags
        content {
          ingredients
          instructions
          tools
        }
        description {
          description
        }
        prepTime
        servings
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default BreweryProductTemplate;
