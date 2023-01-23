import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const query = graphql`
  {
    allFile(filter: { ext: { ne: "svg" }, name: { ne: "logo" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: FIXED
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
      <Wrapper>
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
              <p>{name}</p>
            </article>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;

  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;
export default Gallery;
