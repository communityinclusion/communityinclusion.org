import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import bchdownLong from '../../images/bch-dsp-long.png'

const BCHdspPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Boston Children’s Hospital Down Syndrome Program" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Boston Children’s Hospital Down Syndrome Program</h1>
       <img src={bchdownLong} className="db" alt = "Boston Children’s Hospital Down Syndrome Program" />

<p>The <Link className="link dim blue" to="http://www.childrenshospital.org/Centers-and-Services/Programs/A-_-E/down-syndrome-program">Down Syndrome Program at Boston Children&rsquo;s Hospital</Link> offers specialized services for children with Down syndrome and their families. The original home of the Institute for Community Inclusion, the program supports children and young adults with Down syndrome from birth through age 22. Services include family support, referrals to affiliated clinics, and prenatal consultations.</p>
<p>Boston Children&rsquo;s Hospital has been named the #1 children&rsquo;s hospital in the country multiple times by U.S. News &amp; World Report. The Down Syndrome Program allows families to access the unparalleled resources of this leading hospital. It also offers personal connections such as a patient liaison (a young person with Down syndrome who helps guide a family through using the program).</p>
<p>Learn more about the <Link className="link dim blue" to="http://www.childrenshospital.org/Centers-and-Services/Programs/A-_-E/down-syndrome-program">Down Syndrome Program.</Link></p>


</div>
</div>
</section>
  </Layout>
)

export default BCHdspPage