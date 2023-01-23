import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  // if description not specified, default to meta description
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "de" }} // set the language
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default SEO;
