import React from "react"
import Layout from "../components/layout"
import SidebarAbout from "../components/sidebarabout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
   <section className="mw8 center">
    <SEO title="About the ICI" />
    <h1>About</h1>

<div className="cf ph2-ns">
    <SidebarAbout />

    <div className="fl w-75 pa2">

    <p>  ICI recently celebrated its 50th anniversary as a University Center for Excellence in Developmental Disabilities (UCEDD), started by President Kennedy. UCEDDs work with people with disabilities, members of their families, state and local government agencies, and community providers in projects that provide training, technical assistance, service, research, and information sharing, with a focus on building the capacity of communities to sustain all their citizens.</p>
    </div>
    </div>
</section>
  </Layout>
)

export default AboutPage
