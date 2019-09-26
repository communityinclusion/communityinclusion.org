import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import fqiLong from '../../images/tc-fqi-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const FQIPage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'Future Quest Island'] } />
      <section className="mw8 center">
       <SEO title="Future Quest Island" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Future Quest Island</h1>
       <img src={fqiLong} className="db" alt = "Future Quest Island" />
       
       <p><a className="link dim blue" href="https://thinkcollege.net/about/what-is-think-college/future-quest-island">Future Quest Island (FQI)</a> is an accessible, game-based college and career readiness tool for middle schoolers with and without disabilities. Through an engaging online platform, FQI aligns 21st-century technology skills with educational and employment goals.</p>

<p>FQI is aimed at middle school general and special education teachers, as well as technology professionals, counselors, administrators, and transition professionals. Its goal is to advance the engagement and transition plans of youth with and without disabilities so that they can build a robust path to lifelong success, in middle school and beyond.</p>

<p>Learn more about how <a className="link dim blue" href="https://thinkcollege.net/about/what-is-think-college/future-quest-island">Future Quest Island engages middle schoolers.</a></p>

</div>
</div>
</section>
  </Layout>
)

export default FQIPage