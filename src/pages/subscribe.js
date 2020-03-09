import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Helmet } from 'react-helmet'

const Subscribe = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  
}) => (
 
  <Layout>
    <Helmet>
    <script> var _ctct_m = "b49f2c8400ca9ddcee2ba421b594264d"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
</Helmet>
     <Breadcrumb crumbs={ [ 'Home', 'Subscribe' ] } />
   <section className="center mw8">
   <SEO title="Subscribe" />
    <h1>Subscribe</h1>
 <div className="pa4-l">
 <div class="ctct-inline-form" data-form-id="d1e81fb3-9e40-46dd-8028-2852e942a917"></div>
</div>
 </section>
  </Layout>
)

export default Subscribe
