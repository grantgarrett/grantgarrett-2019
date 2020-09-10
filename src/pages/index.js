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
      Currently I’m <span className="highlight">open</span> for contract or
      full-time design work.
    </p>
    <p>
      Previously I helped design product at SightBox, InQuicker, InVision,
      Sprintly, and AppFog. Learn more: {` `}
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
    <ul>
      <li>Learning React</li>
      <li>
        <span className="line-through">Getting back into climbing</span>{" "}
        (2020...)
      </li>
    </ul>
    <h3>Play</h3>
    <p>
      <span className="line-through">
        Right now I’m in the midst of training for the Mountain Lakes 100.
      </span>
      <br />
      <b>Update:</b> I completed my first 100 mile run,{" "}
      <a
        href="https://www.strava.com/activities/2732253168/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mountain Lakes 100
      </a>{" "}
      back in September.
    </p>
    <p>
      Other races I’ve done are the Mt. Baker Ultra, Tillamook Burn 50, and the
      Portland Marathon. Some of the more significant mountains I've climbed in
      the Pacific Northwest include Forbidden Peak, Mt. Hood, and Mt. Rainier.
    </p>
    <h3>Find Me Elsewhere</h3>
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
