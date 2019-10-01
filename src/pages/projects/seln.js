import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import selnLong from '../../images/seln-long.gif'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const SelnPage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'SELN'] } />
      <section className="mw8 center">
       <SEO title="Seln" />
  
   

   
       <div className="w-100 pa2">
       <h1>State Employment Leadership Network</h1>
       <img src={selnLong} className="db" alt = "SELN" />
  <p>The <a className="link dim blue" href="https://selnhub.org/home/">State Employment Leadership Network</a> (SELN) brings together state intellectual and developmental disability (IDD) agencies for sharing, educating, and providing guidance on practices and policies around employment. The SELN offers technical assistance to its member states to boost their efforts to make substantial changes in their service systems.</p>
<p>Run by ICI and the National Association of State Directors of Developmental Disabilities Services, the SELN supports states to improve integrated employment outcomes for people with IDD. Its members put into practice core beliefs: that employment is a path to opportunity, that employment connects people, that employment means equity, and that employment means increased economic opportunity.
</p>

<p><a className="link dim blue" href="https://selnhub.org/home/">Explore the SELN and its accomplishments.</a></p>
</div>
</section>
  </Layout>
)

export default SelnPage