import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"



const Healthcare = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Areas of Emphasis' ] } />
   <section className="center mw8">
   <SEO title="Healthcare" />
    <h1>Healthcare</h1>
<ul>
  
<li>Easier Access to Community Services</li>
<li>Support for Youth With Special Health-Care Needs</li>
<li>Mental-Health Services for Diverse Populations</li>
<li>Maternal and Child Health</li>
  
</ul>

</section>
  </Layout>
)

export default Healthcare
