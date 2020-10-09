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
            with A ac condimentum consectetur cras elementum facilisi iaculis
            justo lacinia magnis mus parturient placerat platea rutrum sed
            semper sociis sociosqu suspendisse tempus ullamcorper velit
            vestibulum vitae vivamus. Aliquam condimentum curae; dictumst dui eu
            facilisis hendrerit magnis nam non parturient tincidunt ultrices
            urna vel. Ad adipiscing amet consequat convallis eget fames feugiat
            habitasse himenaeos lectus ligula lobortis malesuada mi nibh nisl
            ornare platea pulvinar rutrum sapien tellus torquent turpis
            vestibulum. Adipiscing augue congue duis habitasse luctus massa
            metus nascetur odio tempus urna vitae. Aenean blandit cum curabitur
            dolor iaculis justo lobortis massa mauris molestie mollis nam non
            nunc odio orci parturient pellentesque placerat porta quisque
            sodales ullamcorper urna velit viverra. Adipiscing cras cursus
            eleifend est malesuada molestie nunc phasellus porta posuere
            suspendisse ut. Aenean arcu at bibendum egestas eget eros facilisi
            fringilla integer lectus mattis mollis nisl pharetra risus semper
            torquent. Accumsan convallis cubilia curae; dapibus dignissim dui
            duis eget facilisi fringilla iaculis laoreet libero lobortis luctus
            mus parturient porta semper ultrices vehicula velit vivamus viverra.
            Ac bibendum elit justo leo
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
