import React from "react"
// import { Link } from
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
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
      <section id="hero" className="">
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
            <span className="  call-to-action ">Hire me na</span>
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

      <section className="">
        <div className="title p-3">Recent Works</div>
        <div className="container px-5 ">
          {data.allInfoJson.nodes.slice(1, 4).map(item => (
            <div className="container way  work">
              <div class="row  p-lg-2 p-sm-0 p-md-2 lo position-relative">
                <div class="col-lg-6 col-12 tell two ">
                  <div className="work-card">
                    <h5 className="work-title">{item.title}</h5>

                    <div className="des">
                      <p className="work-description">{item.description}</p>
                    </div>
                  </div>
                  <div className="work-tech">
                    {item.tech.map(tec => (
                      <li className="small">{tec.toLowerCase()}</li>
                    ))}
                  </div>
                  <span className="d-flex">
                    <span>
                      <a href={item.url}>demo</a>
                    </span>
                    <span>
                      {/* {console.log("repo", item)} */}
                      <a href={item.repo}>code</a>
                    </span>
                  </span>
                </div>
                <div class="col-lg-6 col-12 border two sky">
                  <Img fluid={item.src.childImageSharp.fluid} alt="products" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="title p-3">Other Works</div>
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
            {data.allInfoJson.nodes
              .slice(Math.max(data.allInfoJson.nodes.length - 3, 3))
              .map(item => (
                <div class="col">
                  <div class="p-3 border project-wrap">
                    <h4 className="">{item.title}</h4>
                    <p className="description">{item.description}</p>
                    <div className="technology">
                      <ul class="nav">
                        {item.tech.map(tec => (
                          <li class="nav-item mr-3 work-tech">{tec}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="d-flex">
                      <span>
                        <a href={item.repourl}>code</a>
                      </span>
                      <span>
                        <a href={item.url}>demo</a>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="footer"></div>
      </section>
    </Layout>
  )
}

export default IndexPage
