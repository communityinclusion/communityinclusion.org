/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Header from "./header"
import Image from "../components/image"
import Footer from "../components/footer"
import './post.css'
import './tags.css'
import "../styles/keen.css"
import "../styles/custom.css"



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
<Navbar />
<Image />
<section className="center bg-gray pa1 ph5-ns">
    <p className="f6 f5-ns tl lh-copy">
    The ICI is a University Center for Excellence in Developmental Disabilities, part of the national network started by President John F. Kennedy.
    </p>
  </section>
  <main className="main-content ph3 ph4-ns">{children}</main>
             <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
