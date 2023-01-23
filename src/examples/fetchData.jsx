import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FistQuery {
    site {
      info: siteMetadata {
        author
        description
        title
        person {
          age
          name
        }
        complexData {
          age
          name
          sex
        }
        simpleData
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      info: { title, person },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>name: {person.name}</h2>
      <h5>title: {title}</h5>
    </div>
  );
};

export default FetchData;
