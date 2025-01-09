import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";
// import CapitaliseLetter from "../components/CapitaliseLetter";

const Events = () => {
  // const data = useStaticQuery(query);
  // const nodes = data.allFile.nodes;
  return (
    <>
      <Layout>
        <Seo title="Events" description="Upcoming events" />
        <div className="page recipes-list">
          <section className="about-page">
            <article>
              <h1 className="title-underline">TODO</h1>
            </article>
          </section>

          {/* {nodes.map((image, index) => {
            const { name } = image;
            const pathToImage = getImage(image);
            return (
              <article key={index} className="item">
                <GatsbyImage
                  image={pathToImage}
                  alt="gallery image"
                  className="gallery-img"
                />
                <p>{CapitaliseLetter(name)}</p>
              </article>
            );
          })} */}
        </div>
      </Layout>
    </>
  );
};

export default Events;
