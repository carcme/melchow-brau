import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const Events = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];

  return (
    <>
      <Layout>
        <Seo title="Events" description="Upcoming events" />
        <main className="page">
          <div>
            <span className="left-span">future</span>
            <span className="right-span">events</span>
          </div>
          <section className="events-page">
            <article>
              <h1>Upcoming Events</h1>
            </article>
          </section>

          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6>January</h6>
                <h4>01</h4>
                <a href="#">
                  sdadad
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
              <div className="course-info">
                <h6>Brewery Tour</h6>
                <h3>Tour & Taster</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci officia nesciunt minima recusandae corporis quia
                  accusamus nam accusantium est dolorem?
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Events;
