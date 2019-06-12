import React from "react"
import Layout from "../../components/layout"
import SidebarAbout from "../../components/sidebarabout"
import SEO from "../../components/seo"

const MissionPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Mission and Vision" />
  
   
   <div className="cf ph2-ns">
       <SidebarAbout />
   
       <div className="fl w-75 pa2">
       <h1>Mission and Vision</h1>
       <h2 id="mission">Mission</h2>

<p>The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of the community. As practitioners, researchers, and teachers, we form partnerships with individuals, families, and communities. Together we advocate for personal choice, self-determination, and social and economic justice.</p>

<h2 id="vision">Vision</h2>

<p>We work toward this mission by:</p>

<ul>
<li>Advancing equitable access to education, employment, health care, and community involvement.</li>

<li>Encouraging self-driven and well-informed decision-making, so that people of all abilities can shape their lives.</li>

<li>Sharing research and information that is written in plain language and represents the latest findings from the field.</li>
</ul>
</div></div>

</section>
  </Layout>
)

export default MissionPage
