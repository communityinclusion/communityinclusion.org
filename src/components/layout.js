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
import { Helmet } from "react-helmet";



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

   <Helmet>
        <script>{'var _ctct_m = "e76c01474fb820838f2cf1ff04159907";'}</script>
        <script
          id="signupScript" src="https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          defer
        />
      </Helmet>
<main className="main-content container-lg my-4">{children}</main>
        
             <Footer />
      
 
  </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
