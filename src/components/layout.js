/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar2 from "../components/navbar2"
import Header2 from "../components/header2"
import Footer from "../components/footer"
import './post.css'
import './tags.css'
import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'




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
        <Header2 siteTitle={data.site.siteMetadata.title} />
<Navbar2 />
          <main>{children}</main>
             <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
