import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import thinkworkLong from '../../images/thinkwork-long.png'


const ThinkWorkPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Think Work" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Think Work</h1>
       <img src={thinkworkLong} className="db" alt = "ThinkWork" />
  <p><Link className="link dim blue" to="https://www.thinkwork.org/">ThinkWork!</Link> is the hub for an array of projects related to employment for people with intellectual and developmental disabilities (IDD). Examples include the <Link className="link dim blue" to="https://www.thinkwork.org/rrtc">Rehabilitation Research & Training Center on Advancing Employment for Individuals with IDD</Link>. This project conducts and shares research on topics such as the best ways to share information about employment with people with IDD and their families, and ways to increase the effectiveness of employment consultants.</p>

<p>ThinkWork! is also home to the <Link className="link dim blue" to="https://www.thinkwork.org/cle">Community Life Engagement</Link> project, which examines the many ways that people with IDD spend their time when they are not at school or at work; and <Link className="link dim blue" to="https://www.thinkwork.org/project/real-work-stories">Real Work Stories</Link>, which shares stories of people with IDD who have found fulfilling paid employment in their communities and the agencies that supported them to reach that goal.</p>

<p><Link className="link dim blue" to="https://www.thinkwork.org/">Find out more about ThinkWork! and its projects.</Link></p>
</div>
</div>
</section>
  </Layout>
)

export default ThinkWorkPage