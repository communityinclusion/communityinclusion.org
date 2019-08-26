import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"


const Education = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Areas of Emphasis' ] } />
   <section className="center mw8">
   <SEO title="Education" />
    <h1>Education</h1>
    <ul>
   <li>Professional Development for Instructors</li> 
   <li>Inclusive Postsecondary Education</li> 
   <li>Universal Course Design</li> 
   <li> Youth Development and Leadership</li> 
   <li> Early Education and Care</li> 
    </ul>
</section>
  </Layout>
)

export default Education
