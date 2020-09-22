import React from "react"
// import { Link } from
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="hero">
      <div className="container hero-header p-0">
        <p>Hi, my name is</p>
        <h2>
          Muhammad Bashir. <br /> I build things for the web.
        </h2>
        <p className="hero-description">
          I'm a front end developer based in Lagos, specializing <br />
          in building exceptional websites, applications, and <br />
          everything in between.
        </p>
      </div>
      <span className="socials container ">
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
      </span>
    </section>
    <section>
      <div className="title border">Recent Works</div>
      <div className="container px-5 border">
        <div className="container way">
          <div class="row  p-lg-2 p-sm-0 p-md-2 position-relative">
            <div class="col-lg-4 col-12 tell two">
              <div className="work-card">
                <p className="work-title">Online Store</p>
                {/* <hr /> */}
                {/* <div className="h1 code mt-4 mb-3">async {"{"}</div>  */}
                <p className="work-description">
                  Adipiscing cras cursus eleifend est malesuada molestie nunc
                  phasellus porta posuere suspendisse ut. Aenean arcu at
                  bibendum egestas eget eros facilisi fringilla integer lectus
                  mattis mollis nisl pharetra risus semper torquent.
                </p>
              </div>
              {/* <hr /> */}
              <div className="work-tech">
                <li>Gatsby</li>
                <li>React</li>
                <li>API</li>
              </div>
            </div>
            <div class="col-lg-8 col-12 border two sky">B</div>
          </div>
        </div>
      </div>
      <div className="title border">Other Works</div>
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 border project-wrap">
              <h4 className="">Title</h4>
              <p className="description">
                Find out how we built a custom headless CMS with Node, Express,
                and Firebase for a project at Upstatement
              </p>
              <div className="technology">
                <a className="tech">T</a>
                <a className="tech">T</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border project-wrap">
              <h4 className="">Title</h4>
              <p className="description">
                Find out how we built a custom headless CMS with Node, Express,
              </p>
              <div className="technology">
                <a className="tech">T</a>
                <a className="tech">T</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border project-wrap">
              <h4 className="">Title</h4>
              <p className="description">
                Find out how we built a custom headless CMS with Node, Express,
                and Firebase for a project at Upstatement
              </p>
              <div className="technology">
                <a className="tech">T</a>
                <a className="tech">T</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border project-wrap">
              <h4 className="">Title</h4>
              <p className="description">
                Find out how we built a custom headless CMS with Node, Express,
                and Firebase for a project at Upstatement
              </p>
              <div className="technology">
                <a className="tech">T</a>
                <a className="tech">T</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="footer"></div>
    </section>
  </Layout>
)

export default IndexPage
