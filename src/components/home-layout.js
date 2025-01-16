/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as Spotlight from '@spotlightjs/spotlight';
import ErrorBoundary from "./ErrorBoundary"
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */
import Navbar from "./navbar"
import Header from "./header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import "./post.css"
import "./tags.css"
import "../styles/custom.css"

if (process.env.NODE_ENV === 'development') {
  Spotlight.init();
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
     <ErrorBoundary>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navbar />
      <div className="container-lg">
        <Hero />
      </div>
      <main className="main-content container-lg my-4">{children}</main>
      <Footer />
      </ErrorBoundary>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
