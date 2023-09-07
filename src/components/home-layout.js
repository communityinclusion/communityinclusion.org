/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import Navbar from "./navbar"
import Header from "./header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import './post.css'
import './tags.css'
import "../styles/custom.css"



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet>
          

</Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
<Navbar />
<Hero />
  <main className="main-content container-lg my-4">{children}</main>
             <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
