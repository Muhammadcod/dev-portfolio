import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div id="about-page-content">
      <section id="story">
        <div className="container mb-4">
          <div className="sub-title">
            <h1>My Story</h1>
          </div>
          <div className="story-paragraph">
            Muhammad bashir is a Front-End Web Developer based in Nigeria. He
            loves designing & coding simple aesthetic designs, playing football,
            traveling, and watching movies. Presently, he works as a freelance
            web developer. He has a BSc in Chemistry from the University of
            Ilorin, a PGD and Masters Degree in Chemical and Polymer Engineering
            at Lagos State University. For more info, check out his portfolio. I
            have a diverse set of skills i employ in coding pixel perfect design
            by writing simple and well structured HTML combined with reasonable
            and efficient CSS with it various transpilers. i am also well versed
            with JavaScript library ( React ), which i use in building complex UI's.
          </div>
        </div>
      </section>
      <section id="skill">
        <div className="container">
          <div className="sub-title">
            <h1>Thecnologies</h1>
          </div>
          <div className="">
            <div class="container">
              <div class="row g-2">
                <div class="col-6">
                  <div class="p-3 border d-flex bg-light justify-content-between">
                    <span className="center">A</span>
                    <span className="">A</span>
                    <span className="center">A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="works"></section>
    </div>
  </Layout>
)

export default About
