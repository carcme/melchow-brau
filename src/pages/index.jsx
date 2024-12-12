import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="Homepage for Melchow Brau" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/melchow-brau-main.jpg"
            alt="hero image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Great Beer</h1>
              <h4>Our Brewery, your belly</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}
