import React from "react"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from "../components/layout"
import SEO from "../components/seo"


const PublicationsPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    <SEO title="Publications" />
    <section className="mw8 center">
    <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
       <div className="w-100">
       <h1>Publications</h1>
       <p>ICI staffers and leadership have worked on a wide range of grant-funded projects over our 50+ years, and we have published hundreds of peer-reviewed articles, white papers, and briefs. Below are links to a few key publications. You can find more on the <a href="https://scholarworks.umb.edu/ici/">UMass Boston ScholarWorks site</a>. </p>
       <p>You can also view data, research findings, and publications by visiting individual projects’ pages (start by choosing “Projects” from the main menu). </p>

</div>

</section>
  </Layout>
)
export default PublicationsPage
