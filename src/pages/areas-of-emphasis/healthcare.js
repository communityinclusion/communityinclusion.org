import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const HealthcarePage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
   <section className="center mw8">
   <SEO title="Healthcare" />
   <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
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

export default HealthcarePage
