/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ErrorBoundary from "./ErrorBoundary"
import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import "./post.css"
import "./tags.css"

Sentry.init({
  dsn: "https://3d981740717e4fe8a72e44cce3060d6e@o339238.ingest.us.sentry.io/1875087",

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  spotlight: __DEV__,
})

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
