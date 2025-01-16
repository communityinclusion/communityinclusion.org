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
import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import "./post.css"
import "./tags.css"

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
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Navbar />
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
