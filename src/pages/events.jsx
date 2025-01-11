import React, { useContext } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import { monthToStr } from "../utils/monthToString";

const Events = ({ data }) => {
  const globalState = useContext(GlobalStateContext);

  const events = data.allContentfulBreweryEvent.nodes.filter(
    (event) => event.node_locale === globalState.lang
  );

  // get todays date and format it
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  const currentDate =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day);
  return (
    <>
      <Layout>
        <Seo title="Events" description="Upcoming events" />
        <main className="page">
          <section className="">
            <article className="">
              {/* <h2 className="left-span">Upcoming</h2>
              <h2 className="right-span">Events</h2> */}
              <h2>Upcoming Events</h2>

              {events === null && <h4>No events available</h4>}
              {events !== null &&
                events.map((event) => {
                  const { id, category, title, description, date, time } =
                    event;

                  const dateObj = date.split("-");
                  const dayTime = dateObj[2].split("T");

                  return (
                    <div key={id} className="events-container">
                      <div className="event-card">
                        <div className="date-container">
                          <p className="time">{time}</p>
                          <div className="when-container">
                            <p className="day">{dayTime[0]}</p>
                            <p className="month">
                              {monthToStr[parseInt(dateObj[1]) - 1]}
                            </p>
                          </div>
                        </div>
                        <div className="event-content">
                          <p className="category">{category}</p>
                          <p className="title">{title}</p>
                          <p className="desc">{description.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </article>
          </section>
          <section className="previous-events">
            <article className="">
              {/* <h2 className="left-span">Upcoming</h2>
              <h2 className="right-span">Events</h2> */}
              <h2>Previous Events</h2>
              <p>No previous events found</p>
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
