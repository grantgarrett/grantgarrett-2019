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
    <h2>I design and enjoy long days in the mountains.</h2>
    <p>
      Currently I’m designing at Sightbox. Previously I helped design product at
      InQuicker, InVision, Sprintly, and AppFog. Learn more about my design work
      on my portfolio site:{" "}
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
    <p>
      Right now I’m in the midst of training for the Mountain Lakes 100. Other
      endurance related activities I’ve done are racing the Mt. Baker Ultra,
      Tillamook Burn 50, and the Portland Marathon and summiting mountains in
      the Pacific Northwest such as Forbidden Peak, Mt. Hood, and Mt. Rainier.
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
      <a
        href="mailo:grant@grantgarrett.com?subject=Hi from gg.com"
        target="_blank"
        rel="noopener noreferrer"
      >
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
