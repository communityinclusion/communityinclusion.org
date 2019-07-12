import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import empfirstLong from '../../images/empfirst-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const employmentfirstmaPage = () => (
  <Layout>
              <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'EmploymentFirstMA'] } />

      <section className="mw8 center">
       <SEO title="EmploymentFirstMa" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>EmploymentFirstMa</h1>
       <img src={empfirstLong} className="db" alt = "EmploymentFirstMA" />
  <p><Link className="link dim blue" to="https://employmentfirstma.org/">EmploymentFirstMA</Link> supports the implementation of Employment First strategies and policies in Massachusetts. Employment First is a framework for systems change used across the nation. This framework promotes the idea that all people, with and without disabilities, are able to fully participate in competitive, integrated employment and community life.</p>

<p>EmploymentFirstMA is hosted by ICI and funded by the <Link className="link dim blue" to="https://www.mass.gov/orgs/department-of-developmental-services">Massachusetts Department of Developmental Services</Link> (DDS). This initiative assists providers with the transformation from center-based work to work in the community. ICI provides training, technical assistance, and access to a wide range of tools and resources that support the <Link className="link dim blue" to="www.mass.gov/eohhs/docs/dmr/blueprint-for-success.pdf">Blueprint for Success</Link>, DDS’s plan for improving integrated employment outcomes across the state.</p>

<p><Link className="link dim blue" to="https://employmentfirstma.org/">Learn how Employment First is becoming a reality in Massachusetts.</Link></p>
</div>
</div>
</section>
  </Layout>
)

export default employmentfirstmaPage