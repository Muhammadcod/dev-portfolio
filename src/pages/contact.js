import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/*import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"*/
import { faCodeBranch, faExternalLinkAlt  } from '@fortawesome/free-solid-svg-icons'

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Contact = () => {

  // const disabledNext = nextPost ? "" : "disabled-link"

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
      <SEO title="Contact" />
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

      <section className='container'>
        <div className='row row-cols-1 row-cols-md-2'>
          {data.allInfoJson.nodes.map(item => (
            <div className='col mb-4'>
              <div className='border project-wrapper'>
                <div className='d-flex justify-content-between'>
                  <Img fluid={item.src.childImageSharp.fluid} className="card-img" alt="item" />
                  <div className='d-flex flex-column justify-content-between p-2 project--links'>
                    <Link  disabled={item.url[1] === null}
                           to={item.url[1] ? item.url[1] : '/'} className={`button ${item.url[1] ? "" : "disabled-link"}`}>
                      <FontAwesomeIcon icon={faCodeBranch} size="2x" className='project--links' />
                    </Link>
                    <Link  disabled={item.url[0] === null}
                           to={item.url[0] ? item.url[0] : '/'} className={`button ${item.url[0] ? "" : "disabled-link"}`}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" className='project--links' />
                    </Link>
                  </div>
                </div>
                <div className="overlay">
                  <div className="text">
                    <p className="work-description">{item.description}</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='one border container'>C</section>
    </Layout>
  )
}

export default Contact
