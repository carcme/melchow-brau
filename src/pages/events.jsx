import React, { useContext } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const Events = ({ data }) => {
  const globalState = useContext(GlobalStateContext);

  const events = data.allContentfulBreweryEvent.nodes.filter(
    (event) => event.node_locale === globalState.lang
  );

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Layout>
        <Seo title="Events" description="Upcoming events" />
        <main className="page">
          <section className="events-page">
            <article>
              <h2>Upcoming Events</h2>

              {events === null && <h4>No events available</h4>}
              {events !== null &&
                events.map((event) => {
                  const { id, category, title, description, date, time } =
                    event;

                  const dateObj = date.split("-");
                  const dayTime = dateObj[2].split("T");

                  return (
                    <div key={id} className="courses-container">
                      <div className="course">
                        <div className="course-preview">
                          <h4 style={{ paddingBottom: "30px" }}>{time}</h4>
                          <h6>{dayTime[0]}</h6>
                          <h6>{month[parseInt(dateObj[1]) - 1]}</h6>
                        </div>
                        <div className="course-info">
                          <h6>{category}</h6>
                          <h3>{title}</h3>
                          <p>{description.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </article>
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulBreweryEvent {
      nodes {
        id
        node_locale
        category
        title
        description {
          description
        }
        date
        time
      }
    }
  }
`;

export default Events;
