import React from "react"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { faCodeBranch, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

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
      <section className=' container d-flex justify-content-center align-items-center'
               style={{ minHeight: `100vh` }}>
        <div className="text-center">
          <div className="card-body">
            <p className="card-text">Hi, my name is</p>
            <h1 className="card-title">Muhammad Bashir.</h1>
            <p className="card-text"> I'm a frontend developer based in Lagos, specializing
              in building exceptional websites, applications, and
              everything in between.
            </p>
          </div>
          <button>Hire Me</button>
        </div>
      </section>

      <section className='work-wrapper container'>
        <div className='work--title'>
          <h3>Works</h3>
        </div>

        <section className='container project-container'>
          <div className='row row-cols-1 row-cols-md-2'>
            {data.allInfoJson.nodes.map(item => (
              <div className='col mb-4' key={item.id}>
                <div className="card bg-dark text-white" key={item.id}>
                  <Img fluid={item.src.childImageSharp.fluid} className="card-img" alt="item" />
                  <div className="card-img-overlay display__none ">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>


    </Layout>
  )
}

export default IndexPage
