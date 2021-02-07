import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"*/
import {faExternalLinkAlt  } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <section className= "container d-flex justify-content-center align-items-center"
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
          <a href="mailto:adebayomuhammad47@gmail.com">
            <button className='btn btn-light' >Hire Me</button>
          </a>
        </div>
      </section>

      <section id='work' className='work-wrapper container'>
        <div className='work--title'>
          <h3>Works</h3>
        </div>

        <section className='container project-container'>
          <div className='row row-cols-1 row-cols-md-2'>
            {data.allInfoJson.nodes.map(item => (
              <div className='col mb-4 ' key={item.id}>
                <div className="card project-card bg-light text-white" key={item.id}>
                  <Img fluid={item.src.childImageSharp.fluid} className="card-img" alt={item.title} />
                  <div className="card-img-overlay display__none">
                    <h5 className="card-title modify__title d-flex justify-content-between">
                      {item.title}
                      <a href={item.url[0] ? item.url[0] : '/'}
                         className={`button ${item.url[0] ? "" : "disabled-link"}`}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} className='' />
                      </a>
                    </h5>
                    <p className="card-text modify__text" style={{width: `388px`}}>{item.description}</p>
                    <a href={item.url[1] ? item.url[1] : '/'}
                       className={`button ${item.url[1] ? "" : "disabled-link"}`}>
                      <button className='project--links btn btn-light' >code</button>
                    </a>
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
