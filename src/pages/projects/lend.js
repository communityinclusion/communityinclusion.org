import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import bchlendLong from '../../images/bch-lend-long.png'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const LENDBostonPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    
      <section className="mw8 center">
       <SEO title="Boston LEND" />
  
       <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>

   
       <div className="w-100 pa2">
       <h1>Boston LEND</h1>
       <img src={bchlendLong} className="db" alt = "Boston LEND" />
<p>The <a className="link dim blue" href="http://lendboston.org/">LEND Program at Boston Children&rsquo;s Hospital</a> is an interdisciplinary training program that supports health professionals to work with patients with intellectual and developmental disabilities. Our LEND Fellows receive funding to participate in a series of seminars and courses throughout each academic year.</p>
<p>Course work focuses on interdisciplinary evaluations, the life course perspective and public health, cultural competence, family-centered care, and the medical home. Seminars offer an in-depth look at topics such as evidence-based research, autism spectrum disorder, and disability policy. Fellows also participate in community visits and affiliate with community-based organizations that offer services to diverse populations throughout the Boston area.</p>

<p><a className="link dim blue" href="http://lendboston.org/">Learn more about LEND Boston.</a></p>
</div>
</section>
  </Layout>
)

export default LENDBostonPage