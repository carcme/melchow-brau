import React, { useContext } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/SEO";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import { monthToStr } from "../utils/monthToString";
import EventItem from "../components/EventItem";
const Events = ({ data }) => {
  const globalState = useContext(GlobalStateContext);

  const events = data.allContentfulBreweryEvent.nodes.filter(
    (event) => event.node_locale === globalState.lang
  );

  /**
   * TODO: sort events by date and filter out events to oldEvents
   * that are in the past
   */

  const oldEvents = null;

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
              {/* just playing with some background texts */}
              {/* {globalState.lang === "en" && (
                <>
                  <h2 className="left-span">Upcoming</h2>
                  <h2 className="right-span">Events</h2>
                </>
              )}
              {globalState.lang === "de" && (
                <>
                  <h2 className="left-span">Kommende</h2>
                  <h2 className="right-span">Ereignis</h2>
                </>
              )} */}

              {globalState.lang === "en" && (
                <>
                  <h2>Upcoming Events</h2>
                  {events === null && <h4>No events available</h4>}
                </>
              )}
              {globalState.lang === "de" && (
                <>
                  <h2>Kommende Veranstaltungen</h2>
                  {events === null && <h4>Keine Veranstaltungen vorhanden</h4>}
                </>
              )}

              {events !== null &&
                events.map((event) => {
                  const { id, category, title, description, date, time } =
                    event;

                  const dateObj = date.split("-");
                  const dayTime = dateObj[2].split("T");

                  return (
                    <EventItem
                      key={id}
                      category={category}
                      title={title}
                      description={description}
                      day={dayTime[0]}
                      month={monthToStr[parseInt(dateObj[1]) - 1]}
                      time={time}
                    />
                  );
                })}
            </article>
          </section>
          <section className="previous-events">
            <article className="">
              {/* <h2 className="left-span">Upcoming</h2>
              <h2 className="right-span">Events</h2> */}

              {globalState.lang === "en" && oldEvents === null && (
                <>
                  <h2>Previous Events</h2>
                </>
              )}
              {globalState.lang === "de" && oldEvents === null && (
                <>
                  <h2>Vergangene Veranstaltungen</h2>
                </>
              )}
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
