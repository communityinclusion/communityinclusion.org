import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import bchlendLong from '../../images/bch-lend-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"


const LENDBostonPage = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'Lend'] } />
      <section className="mw8 center">
       <SEO title="Boston LEND" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Boston LEND</h1>
       <img src={bchlendLong} className="db" alt = "Boston LEND" />
<p>The <Link className="link dim blue" to="http://lendboston.org/">LEND Program at Boston Children&rsquo;s Hospital</Link> is an interdisciplinary training program that supports health professionals to work with patients with intellectual and developmental disabilities. Our LEND Fellows receive funding to participate in a series of seminars and courses throughout each academic year.</p>
<p>Course work focuses on interdisciplinary evaluations, the life course perspective and public health, cultural competence, family-centered care, and the medical home. Seminars offer an in-depth look at topics such as evidence-based research, autism spectrum disorder, and disability policy. Fellows also participate in community visits and affiliate with community-based organizations that offer services to diverse populations throughout the Boston area.</p>

<p><Link className="link dim blue" to="http://lendboston.org/">Learn more about LEND Boston.</Link></p>
</div>
</div>
</section>
  </Layout>
)

export default LENDBostonPage