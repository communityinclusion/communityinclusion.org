/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Header from "./header"
import Footer from "../components/footer"
import './post.css'
import './tags.css'




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
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
<Navbar />
<main className="main-content container-lg my-4">{children}</main>
        
             <Footer />
  </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
