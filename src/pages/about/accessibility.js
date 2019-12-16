import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const AccessibilityPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
     <section className="mw8 center">
       <SEO title="Accessibility" />
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
  
   
   
   
       <div className="w-100 pa2">
       <h1>Accessibility Policy</h1>
        
<p>We are committed to making this site accessible to all our users. We adhere to Section 508 of the Rehabilitation Act and the W3C Web Content Accessibility Guidelines.</p>

<p>Accessibility includes many facets and best practices. The overall goal is to ensure that our website can be used and easily understood by a diverse array of people, with a range of abilities and disabilities, using a wide range of devices, operating systems, and assistive technology platforms. We have designed this site to be useful, usable, and easy to navigate for all users.</p>
</div>

</section>
  </Layout>
)

export default AccessibilityPage
