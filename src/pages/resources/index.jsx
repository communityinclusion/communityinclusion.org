import React from "react"
import Layout from "../../components/layout"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const ResourcesPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
   <section className="main-content">
  <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
    <h1>Resources</h1>

 <p>Coming Soon</p>

</section>
  </Layout>
)

export default ResourcesPage
