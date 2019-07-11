import React from "react"
import Layout from "../../components/layout"
import SidebarAbout from "../../components/sidebarabout"
import SEO from "../../components/seo"
import { SitemapCrumbs } from 'gatsby-plugin-breadcrumb'

export const ContactPage = ({pageContext, location, crumbLabel}) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
  <Layout>
    <div className="breadcrumbs-wrapper">
      <div className="breadcrumbs mw8 center">
        <SitemapCrumbs className="crumb" crumbs={crumbs} crumbSeparator=" > " />
        </div>
        </div>
      <section className="mw8 center">
   
       <SEO title="Contact Us" />
  
   
   <div className="cf ph2-ns">
       <SidebarAbout />
   
       <div className="fl w-75 pa2">
       <h1>Contact Us</h1>
  <p>The Institute for Community Inclusion is based at the University of Massachusetts Boston with additional offices at Boston Children's Hospital.</p>


<address>
Institute for Community Inclusion/UCEDD<br />
UMass Boston<br />
100 Morrissey Blvd.<br />
Boston, Massachusetts 02125<br />
Voice: 617.287.4300<br />
Fax: 617.287.4352<br />
TTY: 617.287.4350<br />
Email: <a href="mailto:ici@umb.edu">ici@umb.edu</a></address>
</div></div>

</section>
  </Layout>
)
  }
export default ContactPage
