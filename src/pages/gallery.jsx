import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import CapitaliseLetter from "../components/CapitaliseLetter";

const query = graphql`
  {
    allFile(filter: { ext: { ne: "svg" }, name: { ne: "logo" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            width: 400
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  return (
    <Layout>
      <SEO title="Gallery" description="" />
      <div className="page recipes-list">
        {nodes.map((image, index) => {
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
        })}
      </div>
    </Layout>
  );
};

export default Gallery;
