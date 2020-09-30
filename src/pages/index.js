import React from "react"
// import { Link } from
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
      <section id="hero" className="border">
        <div className="sister"></div>
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

      <section className=" border">
        <div className="title p-3">Recent Works</div>
        <div className="container px-5 ">
          {data.allInfoJson.nodes.slice(1, 4).map(item => (
            <div className="container way work">
              <div class="row  p-lg-2 p-sm-0 p-md-2 lo position-relative">
                <div class="col-lg-6 col-12 tell two ">
                  <div className="work-card">
                    <p className="work-title">{item.title}</p>

                    <div className="des">
                      <p className="work-description">{item.description}</p>
                    </div>
                  </div>
                  <div className="work-tech">
                    {item.tech.map(tec => (
                      <li>{tec}</li>
                    ))}
                  </div>
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
                          <li class="nav-item mr-3">{tec}</li>
                        ))}
                      </ul>
                    </div>
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
