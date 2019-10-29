import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const CommunityPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
   <section className="center mw8">
   <SEO title="Community Life" />
   <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
    <h1>Community Life</h1>
    <div className="cf ph2-ns">
<ul>
   <li>National and Community Service</li> 
   <li> Inclusive Volunteer Opportunities</li> 
   <li>Service Leading to Employment and Postsecondary Education</li> 
   <li>Partnerships with Community Organizations</li> 
   <li>Teacher Training in Visual Impairments</li> 
    </ul>
      </div>


</section>
  </Layout>
)

export default CommunityPage
