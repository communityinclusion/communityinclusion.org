import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"

const ThinkWorkPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Think Work" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Think Work</h1>
  <p>ThinkWork! is the hub for an array of projects based at ICI related to employment for people with intellectual and developmental disabilities (IDD). Examples include the Rehabilitation Research & Training Center on Advancing Employment for Individuals with IDD. This project conducts and shares research on topics such as the best ways to share information about employment with people with IDD and their families, and ways to increase the effectiveness of employment consultants.</p>

<p>ThinkWork! is also home to the Community Life Engagement project, which examines the many ways that people with IDD spend their time when they are not at school or at work; and Real Work Stories, which shares stories of people with IDD who have found fulfilling paid employment in their communities and the agencies that supported them to reach that goal.</p>

<p>Find out more about ThinkWork! and its projects.</p>
</div>
</div>
</section>
  </Layout>
)

export default ThinkWorkPage