import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import thinkcollegeLong from '../../images/thinkcollege-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const ThinkCollegePage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'ThinkCollege'] } />
      <section className="mw8 center">
       <SEO title="Think College" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Think College</h1>
       <img src={thinkcollegeLong} className="db" alt = "ThinkCollege" />
  <p><a className="link dim blue" href="https://thinkcollege.net">Think College</a> is a national initiative dedicated to developing, expanding, and improving inclusive higher education options for people with intellectual disability. With a commitment to equity and excellence, Think College supports evidence-based and student-centered research and practice by generating and sharing knowledge, guiding institutional change, informing public policy, and engaging with students, professionals, and families.
Students, families, and educators can use our <a className="link dim blue" href="https://thinkcollege.net/college-search">College Search</a> feature to locate a college or university that includes learners with intellectual disability. Our website also features resources for families, information around training and technical assistance, archived webinars, and news about the latest developments in the field of inclusive higher education.</p>

<p>Visit <a className="link dim blue" href="https://thinkcollege.net">ThinkCollege.net</a>  to learn more!</p>
</div>
</div>
</section>
  </Layout>
)

export default ThinkCollegePage