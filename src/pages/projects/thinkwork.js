import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import thinkworkLong from '../../images/thinkwork-long.png'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const ThinkWorkPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
       
      <section className="mw8 center">
       <SEO title="Think Work" />
       <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
   
       <div className="w-100 pa2">
       <h1>Think Work</h1>
       <img src={thinkworkLong} className="db" alt = "ThinkWork" />
  <p><a className="link dim blue" href="https://www.thinkwork.org/">ThinkWork!</a> is the hub for an array of projects related to employment for people with intellectual and developmental disabilities (IDD). Examples include the <a className="link dim blue" href="https://www.thinkwork.org/rrtc">Rehabilitation Research & Training Center on Advancing Employment for Individuals with IDD</a>. This project conducts and shares research on topics such as the best ways to share information about employment with people with IDD and their families, and ways to increase the effectiveness of employment consultants.</p>

<p>ThinkWork! is also home to the <a className="link dim blue" href="https://www.thinkwork.org/cle">Community Life Engagement</a> project, which examines the many ways that people with IDD spend their time when they are not at school or at work; and <a className="link dim blue" href="https://www.thinkwork.org/project/real-work-stories">Real Work Stories</a>, which shares stories of people with IDD who have found fulfilling paid employment in their communities and the agencies that supported them to reach that goal.</p>

<p><a className="link dim blue" href="https://www.thinkwork.org/">Find out more about ThinkWork! and its projects.</a></p>
</div>
</section>
  </Layout>
)

export default ThinkWorkPage