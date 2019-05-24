import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SidebarAbout from "../../components/sidebarabout"
import SEO from "../../components/seo"

const AboutPage = () => (
  <Layout>
   <section className="mw8 center">
    <SEO title="About the ICI" />


<div className="cf ph2-ns">
    <SidebarAbout />

    <div className="fl w-75 pa2">
    <h1>About</h1>
    <p> ICI recently <Link to="http://50.communityinclusion.org/">celebrated our 50th anniversary</Link> as a <Link to="https://www.aucd.org/template/index.cfm">University Center for Excellence in Developmental Disabilities (UCEDD)</Link>. President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. </p>
    <p>These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another.</p> 
    <p>As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.</p>

    </div>
    </div>
</section>
  </Layout>
)

export default AboutPage
