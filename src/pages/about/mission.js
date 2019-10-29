import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const MissionPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
     <section className="mw8 center">
       <SEO title="Mission and Vision" />
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
  
   
   
   
       <div className="w-100 pa2">
       <h1>Mission, Vision, and Values</h1>
       <h2 id="mission">Mission</h2>

<p>As practitioners, researchers, teachers and advocates, we support systems change and partner with children and adults with disabilities, their families, and communities to advocate for personal choice, self-determination, and social and economic justice.</p>

<h2 id="vision">Vision</h2>

<p>ICI envisions a world that is socially just, where children and adults with disabilities participate fully in their communities and lead rewarding, self-directed and fulfilling lives.</p>

<h2 id="values">Values</h2>
<p>To help realize this vision and mission, we value;</p>
<p><em>Being a <span class="underline b">CHAMPION</span></em> of children and adults with disabilities through advocacy and education.</p>
<p><em>Fostering <span  class="underline b">COMPETENCIES</span></em> that promote the full potential for all.&nbsp;&nbsp;</p>
<p><em>Engaging in <span class="underline b">COMMUNICATION</span></em> to advance knowledge across domains - education, employment, health care, community involvement, and quality of life - with and for children and adults with disabilities.</p>
<p><em>Building <span class="underline b">CONFIDENCE</span></em> in children and adults with disabilities so they can realize self-driven goals.</p>
<p><em>Affording <span class="underline b">CHOICES</span></em> for self-directed and well-informed decision-making, so that people of all abilities can shape their lives.</p>
</div>

</section>
  </Layout>
)

export default MissionPage
