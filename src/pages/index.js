import React from "react"
// import { Link } from
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allInfoJson {
              nodes {
                  id
                  url
                  tech
                  title
                  description
                  src {
                      childImageSharp {
                          fluid {
                              src
                              srcSet
                              base64
                          }
                      }
                  }
              }
          }
      }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <section id="hero" className="landing">
        <div className="sister"></div>
        <div className="container hero-header p-0">
          <div>
            <p>Hi, my name is</p>
            <h2>
              <span style={{ fontWeight: `700` }}>Muhammad Bashir.</span> <br />{" "}
              I build things for the web.
            </h2>
            <p className="hero-description">
              I'm a frontend developer based in Lagos, specializing <br />
              in building exceptional websites, applications, and <br />
              everything in between.
            </p>
            <span className=" ml-1  call-to-action btn btn-dark  "><a
              href="mailto:adebayomuhammad47@gmail.com">Hire me</a></span>
          </div>
        </div>

        <span className="socials container ">
          <li>
            <a href="https://github.com/Muhammadcod" className="git">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adebayo-mohammed"
              className="linked"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/adebayomuhamma2" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/olushiji24"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </span>
      </section>

      <section id="story">
        <div className="container mb-4">
          <div className="title">
            My Story
          </div>
          <div className="container  story-paragraph">
            Muhammad bashir is a Front-End Developer based in Lagos Nigeria. I
            started out as chemist after completing my education (BSc in Chemistry)
            from the University of Ilorin. I furthered my studies into chemical
            engineering where i learnt to see what i had learnt in my first degree
            on a large scale, but i had always loved and saw myself as a programmer,
            to be honest a hacker, but going into it i came to fall in love with
            web development. The challenge that comes with building simple to complex
            aesthetic designs and engaging product has been one of the few things
            that keeps me alive apart from the major things in my life, Allah,
            my wife, daughter and family. Presently, i work as a freelance frontend
            developer and try as much as possible to learn one new stuff everyday.
            I would like to work with a company with top IT professionals
            with great minds who can really help me grow. I love playing football,
            PS games (especially when i think no one is better at it than i am),
            traveling, and watching movies.For more info, check out my works. I
            have a diverse set of skills i employ in building pixel perfect design
            by writing simple and well structured HTML combined with reasonable
            and efficient CSS with it various transpilers. i am also well versed
            with JavaScript library ( React ), which i use in building complex UI's.
            <br />
            Skills: HTML5, CSS3, JavaScript, React, Redux, Gatsby.
          </div>
        </div>
      </section>

      <div id='work'>
        <section className="recent-works mt-5 pt-4">
          <div className="title p-3">Recent Works</div>
          <div className="container px-5 ">
            {data.allInfoJson.nodes.slice(0, 3).map(item => (
              <div className="container way  work">
                <div className="row  p-lg-2 p-sm-0 p-md-2 lo position-relative">
                  <div className="col-lg-6 col-12 tell two ">
                    <div className="work-card">
                      <h5 className="work-title">{item.title}</h5>

                      <div className="des">
                        <p className="work-description">{item.description}</p>
                      </div>
                    </div>
                    <div className="work-tech  mb-2">
                      {item.tech.map(tec => (
                        <li className="small">{tec.toLowerCase()}</li>
                      ))}
                    </div>
                    <span className="d-flex links">
                    <span className='mr-2'>
                      <a href={item.url[0]}>demo</a>
                    </span>
                    <span>
                      {/* {console.log("repo", item)} */}
                      <a href={item.url[1]}>code</a>
                    </span>
                  </span>
                  </div>
                  <div className="col-lg-6 col-12  two sky">
                    <Img fluid={item.src.childImageSharp.fluid} alt="products" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <div className="title p-3">Other Works</div>
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
              {data.allInfoJson.nodes
                .slice(3)
                .map(item => (
                  <div className="col">
                    <div className="p-3 border project-wrap">
                      <h4 className="">{item.title}</h4>
                      <p className="description">{item.description}</p>
                      <div className="technology">
                        <ul className="nav work-tech  mb-2">
                          {item.tech.map(tec => (
                            <li className="nav-item mr-3 work-tech">{tec}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="d-flex links ">
                      <span className='mr-2'>
                        <a href={item.url[0]}>demo</a>
                      </span>
                      <span>
                        <a href={item.url[1]}>code</a>
                      </span>
                    </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>


      <section>
        <div className="footer"></div>
      </section>
    </Layout>
  )
}

export default IndexPage
