import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import empfirstLong from '../../images/empfirst-long.png'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const employmentfirstmaPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
     <section className="mw8 center">
       <SEO title="Employment First Massachusetts" />
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
   
       <div className="w-100 pa2">
       <h1>Employment First Massachusetts</h1>
       <img src={empfirstLong} className="db" alt = "EmploymentFirstMA" />
  <p><a className="link dim blue" href="https://employmentfirstma.org/">EmploymentFirstMA</a> supports the implementation of Employment First strategies and policies in Massachusetts. Employment First is a framework for systems change used across the nation. This framework promotes the idea that all people, with and without disabilities, are able to fully participate in competitive, integrated employment and community life.</p>

<p>EmploymentFirstMA is hosted by ICI and funded by the <a className="link dim blue" href="https://www.mass.gov/orgs/department-of-developmental-services">Massachusetts Department of Developmental Services</a> (DDS). This initiative assists providers with the transformation from center-based work to work in the community. ICI provides training, technical assistance, and access to a wide range of tools and resources that support the <a className="link dim blue" href="www.mass.gov/eohhs/docs/dmr/blueprint-for-success.pdf">Blueprint for Success</a>, DDS’s plan for improving integrated employment outcomes across the state.</p>

<p><a className="link dim blue" href="https://employmentfirstma.org/">Learn how Employment First is becoming a reality in Massachusetts.</a></p>
</div>
</section>
  </Layout>
)


export default employmentfirstmaPage