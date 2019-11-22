import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grant Garrett"
      keywords={[
        `Grant Garrett`,
        `designer`,
        `product designer`,
        `running`,
        `ultra running`,
        `climbing`,
        `trail running`,
      ]}
    />
    <h1>Hello, I’m Grant Garrett</h1>
    <h2>I design digital products & enjoy long days in the mountains.</h2>

    <h3>Work</h3>
    <p>
      Currently I’m designing user interfaces and interactions at Sightbox.
      Previously I helped design product at InQuicker, InVision, Sprintly, and
      AppFog. Learn more about my design work on my portfolio site:{" "}
      <a
        href="https://www.grantgarrett.design"
        target="_blank"
        rel="noopener noreferrer"
        className="big"
      >
        grantgarrett.design
      </a>
      .
    </p>
    <h3>Growth</h3>
    <p>Learning React</p>
    <h3>Play</h3>
    <p>
      <b>Update:</b> I completed my first 100 mile run, the{" "}
      <a
        href="https://www.strava.com/activities/2732253168/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mountain Lakes 100
      </a>{" "}
      back in September.{" "}
      <span className="line-through">
        Right now I’m in the midst of training for the Mountain Lakes 100.
      </span>{" "}
      Other races I’ve done are the Mt. Baker Ultra, Tillamook Burn 50, and the
      Portland Marathon. Some of the more significant mountains I've climbed in
      the Pacific Northwest include Forbidden Peak, Mt. Hood, and Mt. Rainier.
    </p>
    <p>
      Twitter:{" "}
      <a
        href="https://twitter.com/grantgarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
        @grantgarrett
      </a>
      <br />
      Instagram:{" "}
      <a
        href="https://instagram.com/grantgarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
        @grantgarrett
      </a>
      <br />
      Email:{" "}
      <a href="mailto:grant@grantgarrett.com?subject=Hi from gg.com">
        grant@grantgarrett.com
      </a>
      <br />
      Design Portfolio:{" "}
      <a
        href="https://www.grantgarrett.design"
        target="_blank"
        rel="noopener noreferrer"
      >
        grantgarrett.design
      </a>
    </p>
  </Layout>
)

export default IndexPage
