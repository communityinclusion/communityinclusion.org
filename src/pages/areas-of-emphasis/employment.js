import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const EmploymentPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
   <section className="center mw8">
   <SEO title="Employment" />
   <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
    <h1>Employment</h1>
<ul>
 
<li> Support For Job Seekers </li>
<li> Outreach To Employers </li>
<li> Training For Vocational Rehabilitation Agencies And Professionals </li>
<li> Improved State Employment Outcomes </li>
<li> Inclusive Workplaces </li>
 
</ul>

</section>
  </Layout>
)

export default EmploymentPage 
