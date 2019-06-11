import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import thinkcollegeLong from '../../images/thinkcollege-long.png'

const ThinkCollegePage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Think College" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Think College</h1>
       <img src={thinkcollegeLong} className="db" alt = "ThinkCollege" />
  <p><Link className="link dim blue" to="https://thinkcollege.net">Think College</Link> is a national initiative dedicated to developing, expanding, and improving inclusive higher education options for people with intellectual disability. With a commitment to equity and excellence, Think College supports evidence-based and student-centered research and practice by generating and sharing knowledge, guiding institutional change, informing public policy, and engaging with students, professionals, and families.
Students, families, and educators can use our <Link className="link dim blue" to="https://thinkcollege.net/college-search">College Search</Link> feature to locate a college or university that includes learners with intellectual disability. Our website also features resources for families, information around training and technical assistance, archived webinars, and news about the latest developments in the field of inclusive higher education.</p>

<p>Visit <Link className="link dim blue" to="https://thinkcollege.net">ThinkCollege.net</Link>  to learn more!</p>
</div>
</div>
</section>
  </Layout>
)

export default ThinkCollegePage